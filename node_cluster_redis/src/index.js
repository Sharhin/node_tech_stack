const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();
const process = require('node:process');

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
}
else {
  const express = require("express");
  const session = require('express-session');
  const redis = require('redis');
  const {default: RedisStore} = require('connect-redis');

  const app = express();

  const bodyParser = require('body-parser')
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  
  const redisClient = redis.createClient({
    host: 'localhost',
    port: 6379,
    password: "eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81"
  });

  redisClient.connect().catch(console.error)


  redisClient.on('connect', function (err) {
    console.log('Connected to redis successfully');
  });


  redisClient.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' + err);
  });

  let redisStore = new RedisStore({
    client: redisClient,
    prefix: "session:",
  })


  app.use(session({
    store: redisStore,
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: {  }
  }));
  
  app.use((req,res,next)=>{
    if(!req.session.views)
      req.session.views = 0;
   
    next();
  });

  require("./redisRouteCRUD")(app,redisClient);
  
  app.get("/",(req,res)=>{
    req.session.views += 1;
    let j = 0;
    for(let i=0; i<1000000000;i++){
      j+=1;
    }

    res.send("Hello world "+ req.session.views)
  });
  
  app.listen(3000,()=>{
    console.log("server listen on 3000")
  })
}

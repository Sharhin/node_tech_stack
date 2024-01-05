module.exports = (app,redisClient)=>{
  app.get("/redis",(req,res,next)=>{
    res.json({"foo":"bar"})
  });

  app.get("/redis/:key",async (req,res,next)=>{
    const {key} = req.params;
    const keyRedis = 'redis:'+key
    const value = await redisClient.get(keyRedis);
    console.log("value",value)
    // res.json({})
    res.json({[key]:value});
  })

  app.post("/redis/:key",async (req,res,next)=>{
    const {value} = req.body;
    console.log("value",value,req.body)
    let {key} = req.params;
    const keyRedis = 'redis:'+key
    await redisClient.set(keyRedis,value);
    const result = await redisClient.get(keyRedis);
    res.json({[key]:result});
  })

  app.delete("/redis/:key",async (req,res,next)=>{
    const {value} = req.body;
    console.log("value",value,req.body)
    let {key} = req.params;
    const keyRedis = 'redis:'+key
    const result = await redisClient.del(keyRedis);
    res.json({[key]:result});
  })
}
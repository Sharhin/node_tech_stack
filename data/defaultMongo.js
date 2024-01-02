db.createUser(
  {
    user: "mongodb",
    pwd: "password",
    roles: [{ role: "dbOwner", db: "test" }]
  }
)

db.createCollection('todo');

db.users.insertMany([
  {
    first_name: "first_name",
    last_name: "last_name",
    email: "email",
    password: ";)"
  },
]);

db.createCollection('users');

db.todo.insertMany([
  {
    title: "todo 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum tellus vulputate magna porta, rutrum gravida nulla eleifend. Integer lobortis lectus nec est maximus sagittis. Aenean viverra a nunc vel vehicula. Nunc viverra sollicitudin leo id elementum. Mauris ut dolor imperdiet, dapibus dolor eu, porttitor arcu. Praesent ac augue pharetra, lacinia ipsum sed, ultrices lacus. Nulla lacinia sem id iaculis mattis. Mauris ac tristique nisi. Aenean fermentum eros sed eros aliquet ultrices. Mauris sit amet rhoncus risus, non lobortis mi. Maecenas hendrerit, nulla a fermentum pretium, lectus felis lobortis nisi, vel tincidunt nisl nibh et risus. Vivamus vehicula quam molestie nisi semper commodo. Proin ultricies elit placerat justo luctus lobortis. Donec ac felis feugiat, laoreet ex eget, venenatis orci.",
  },
]);
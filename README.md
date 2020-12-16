# task-manager

An API that allows users to login and manage individual tasks dynamically stored in a database with authentication, created using Node, Express, and MongoDB.
Also allows users to upload image avatars.
Tests created using Jest and supertest.

Tools: Mongoose, Multer, Sharp, JWT, bcrypt, validator, Jest, supertest

Task manager API deployed at https://jxu-task-app.herokuapp.com/

## Routes:

* `POST /users` \
  Sample data: ``` {
    "name": "Jane Doe",
    "email": "janedoe@gmail.com",
    "password": "janedoe2"
  } ```

* `POST /users/login` \
  Login for authentication required for almost all further requests \
  Sample data: ``` {
    "email": "janedoe@gmail.com",
    "password": "janedoe2"
   } ```

* `POST /users/logout `
* `POST /users/logoutALL `
* `POST /tasks `\
  Create a task bound to logged in user. \
  Sample data: ```{
    "description": "go shopping",
    "completed": false
  }```
* `POST /users/me/avatar `\
  Upload avatar through form-data
* `GET \users\me`
* `GET \tasks `\
  With pagination, filtering, sorting. eg. \
  `GET /tasks?completed=false` \
  `GET /tasks?limit=10&skip=10` \
  `GET /tasks?sortBy=createdAt_desc` \
* `GET /tasks/:id `
* `PATCH /users/me`
* `PATCH /tasks/:id`
* `DELETE /users/me`
* `DELETE /tasks/:id`
* `DELETE /users/me/avatar`

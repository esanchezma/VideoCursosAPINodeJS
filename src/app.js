const express = require('express');
const initModels = require("./models/initModels");
const db = require('./utils/database');
const userRoutes = require('./routes/users.routes');
const categoriesRoutes = require('./routes/categories.routes');
const coursesRoutes = require('./routes/courses.routes');
const videosRoutes = require('./routes/videos.routes');
const usersCoursesRoute = require('./routes/usersCourses.routes')

const app = express();

app.use(express.json());

initModels();


db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));


app.use('/api/v1', usersCoursesRoute);
app.use('/api/v1', userRoutes);
app.use('/api/v1', categoriesRoutes);
app.use('/api/v1', coursesRoutes);
app.use('/api/v1', videosRoutes);

console.log("My PORT " + process.env.PORT);

module.exports = app;
const { Users, UserCourses, Courses, Categories, Videos, initModels } = require("../models");
const db = require('../utils/database');
const {forEach} = require('p-iteration')

initModels();

const users = [
    {
        firstName: "Elizabeth",
        lastName: "Sanchez",
        email: "sanchezelizabeth99@gmail.com",
        password: "esanchez"
    },
    {
        firstName: "Eylit",
        lastName: "Manzanilla",
        email: "eylit@gmail.com",
        password: "emanza"
    },
    {
        firstName: "Joeslit",
        lastName: "Manzanilla",
        email: "joeslit@gmail.com",
        password: "jmanza"
    },
];

const categories = [
    {name: "Frontend"},
    {name: "Backend"},
    {name: "Styles"},
    {name: "Database"}
];

const courses = [
    {
        title: "Node js",
        description: "Aprender backend",
        instructor: "Ian",
        categoryId: 2,
    },
    {
        title: "React js",
        description: "Aprender frontend",
        instructor: "Pedro",
        categoryId: 1,
    },
    {
        title: "SQL",
        description: "Aprender database",
        instructor: "Miriam",
        categoryId: 4,
    },
    {
        title: "Bootstrap",
        description: "Aprender estilos",
        instructor: "Leonel",
        categoryId: 3,
    }
];

const videos = [
    {
    title: "Como crear un tabla ",
    url: "www.sql.com",
    courseId: 3,
    },
    {
    title: "Que es npm",
    url: "www.node.com",
    courseId: 1,
    },
    {
    title: "Que es un componente",
    url: "www.react.com",
    courseId: 2,
    },
    {
    title: "Como crear un custome hook",
    url: "www.react.com",
    courseId: 2,
    },
    {
    title: "Bootstrap",
    url: "www.bootstrap.com",
    courseId: 4,
    },
];

const userCourses = [
    {user_id:1 , course_id:1},
    {user_id:3 , course_id:4},
    {user_id:3 , course_id:1},
    {user_id:2 , course_id:3},
    {user_id:1 , course_id:2}
  
];



async function seeding () {
    await db.sync({force: false})
   
    await forEach (users, (user)=> Users.create(user))
    await forEach (categories, (category)=>Categories.create(category))
    await forEach (courses, (course)=> Courses.create(course))
    await forEach (videos, (video)=> Videos.create(video))
    await forEach (userCourses, (userCourse)=> UserCourses.create(userCourse))
    
};


seeding();




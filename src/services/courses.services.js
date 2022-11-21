const { Courses,Categories,Videos } = require("../models");

class coursesServices {

       static async create(newCourse){        
        try {
            const { title, description, instructor, categoryId} = newCourse;
            const course = await Courses.create({title, description, instructor, categoryId});
            return course;

        } catch (error) {
            throw (error);
        };
    };

    static async getAll (){
        try {
            const courses = await Courses.findAll();
            return courses;
        } catch (error) {
            throw (error);
        };
    };

    static async getOne (course_id){
        
        try {
            const course = await Courses.findByPk(course_id);
            if (course) {
                return course;
            } else {
                return  json([{ message: "course not found"}]);
                };
        } catch (error) {
            throw (error);
        };
    };

    static async getAllInfo (){
    
        try {
            const courses = await Courses.findAll({
                attributes: { exclude: ["createdAt", "updatedAt"] },
                include: [{
                    model: Categories,
                    attributes: ['name']
                },
                {
                    model: Videos,
                    attributes: ['title', 'url']
                }
                ]});
            if (courses) {
                return courses
            } else {
                return json([{ message: "course not found"}]);
                };
        } catch (error) {
            throw (error);
        };
    };

    static async update(course_id,description){
        

        try {
            const { description } = description;
            const { course_id } = course_id;
            const course = await Courses.findByPk(course_id);
            if (course) {
                course.description = description
                course.save();
                return course;
            } else {
               return json([{ message: "course not found"}]);
            }
        } catch (error) {
            throw (error);
        };

    };
 
    static async remove(course_id) {
        const { course_id } = course_id;
        try {
            const course = await Courses.findByPk(course_id)

            if(course){

                course.destroy()
                return course;

            } else {
                return  json([{ message: "course not found"}]);
            };
            
        } catch (error) {
            throw (error);
        };
            
    }
};


module.exports = coursesServices;
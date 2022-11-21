const UserCourses = require("../models/userCourses.models");

class usersCoursesServices {
        
    static async create(newCourse) {      
        try {
            const { user_id, course_id } = newCourse
            const userCourse = await UserCourses.create(user_id, course_id);
            return userCourse;
        } catch (error) {
            throw error;  
        };
    };

    static async getAll (req, res){
        try {
            const usersCourses = await UserCourses.findAll();
            return usersCourses;
        } catch (error) {
            throw error;  
        };
    };
};

module.exports = usersCoursesServices;
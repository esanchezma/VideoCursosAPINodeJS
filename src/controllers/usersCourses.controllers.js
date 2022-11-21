const { usersCoursesServices } = require("../services");

    const create = async (req, res) => {
        try {
            const { user_id, course_id } = req.body;
            const userCourse = await usersCoursesServices.create({user_id, course_id});
            res.status(201).json(userCourse);
        } catch (error) {
            res.status(500).json({error: error});
        };
    };

    const getAll = async (req, res)=> {
        try {
            const usersCourses = await usersCoursesServices.getAll();
            res.status(200).json(usersCourses);
        } catch (error) {
            res.sendStatus(500);
        };
    };


    module.exports = {
        create,
        getAll      
      };
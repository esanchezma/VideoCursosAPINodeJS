const { usersCoursesServices } = require("../services");

   const create = async (req, res)=> { 
        
        try {
            const newCourse = req.body;
            const course = await usersCoursesServices.create(newCourse);
            res.status(201).json(course)
        } catch (error) {
            res.status(500).json({error: {message: error.errors?.[0].message}});
        };
    };

    const getAll = async (req, res)=> { 
        try {
            const courses = await usersCoursesServices.getAll();
            res.status(200).json(courses)
        } catch (error) {
            res.status(500).json({error: error})
        };
    };
   
    const getOne = async (req, res)=> { 
    
        try {
            const {course_id} = req.params;
            const course = await usersCoursesServices.getOne(course_id);
           
            res.status(200).json(course)
           
        } catch (error) {
            res.status(500).json([{ message: "course not found"}]);
        };
    };
     
    const getAllInfo = async (req, res)=> { 
        try {
            const courses = await usersCoursesServices.getAllInfo()

            res.status(200).json(courses)
            
        } catch (error) {
            res.status(500).json([{ message: "course not found"}]);
        };
      };
 
    const update = async (req, res)=> {        

        try {

            const { description } = req.body;
            const { course_id } = req.params;

            const course = await usersCoursesServices.update(course_id,description);   
            res.status(200).json(course)
           
        } catch (error) {
            res.status(500).json([{ message: "course not found"}]);
        };

    };
 
    const remove = async (req, res)=> {
        
        try {

            const { course_id } = req.params;
            const course = await usersCoursesServices.remove(course_id)
            res.sendStatus(202); 

        } catch (error) {
            res.status(500).json([{ message: "course not found"}]);
            
        }
    };
    module.exports = {
        getAll,
        create,
        getOne,
        getAllInfo,
        update,
        remove,    
      };
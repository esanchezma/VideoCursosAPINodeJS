 const { UsersServices }  = require ("../services");

 const create = async (req, res)  => {
   try {
    const newUser = req.body;
    const result = await usersServices.create(newUser);
    res.status(201).json(result);
   } catch (error) {
    res.status(500).json({error: error});
   }
  };
 
  const getAll = async (req, res)  => {
    try {
      const users = await UsersServices.getAll();
      res.json(users);
    } catch (error)  {
      res.sendStatus(500);
    }
  };
 
  const getOne = async (req, res) => {
    try {
      const { user_id } = req.params;
      const user = await UsersServices.getOne(user_id);
      res.json(user);
    } catch (error) {
       res.sendStatus(500);
    }
  };

  const getCoursesByUser = async (req, res) => {
    try {
      const { user_id } = req.params;
      const coursesByUser = await UsersServices.getCoursesByUser(user_id);
      res.json(coursesByUser);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };
  
  const updatePartial = async (req, res) => {

   try {

      const updateUser = req.body;
      const { user_id } = req.params;
      const result =await UsersServices.updatePartial(updateUser,user_id);
      res.json(result);

   } catch (error) {
    res.status(500).json({ error });
   }   

  };
 
  const removeUser = async(req, res) => {

     try {

      const { user_id } = req.params;      
      const user = await UsersServices.deleteUser(user_id);
      res.json(user);

    } catch {

      res.status(500).json([{ message: "user not found" }]);
    }
  };

// exportar las funciones
  
      module.exports = {
          create, 
          getAll, 
          getOne,
          getCoursesByUser, 
          updatePartial, 
          removeUser,
      };
 
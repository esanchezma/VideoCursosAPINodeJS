//importando modelos
const { Users, Courses } = require("../models");


class usersServices { 

  static async create(newUser) {    
    try {
      const user = await Users.create(newUser);
      return user;
    } catch (error) {
      throw error;      
    }
  }

  static async getAll() {
    try {
      const allUsers = await Users.findAll({
        attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      });
      return allUsers;
    } catch (error) {
      throw error; 
    }
  }

  static async getOne(user_id) {
    try {
      
      const user = await Users.findByPk(user_id, {
        attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      });
      return user;
    } catch (error) {
      throw error; 
    }
  }

  static async getCoursesByUser(user_id) {
    try {
      const coursesByUser = await Users.findAll({
        attributes: { exclude: ["createdAt", "updatedAt", "password"] },
        include: {
            model: Courses,
            attributes: ['title']}, 
        where: {user_id}});

      if (coursesByUser && coursesByUser.length > 0) {
        return coursesByUser;
      } else {
        return json([{ message: "user not found" }]);
      }
    } catch (error) {
      throw error; 
    }
  }

  static async updatePartial(updateUser,user_id) {
    try {
      const { firstName, lastName, password } = updateUser;
      const user = await Users.findByPk(user_id);

      if (firstName) {
        user.firstName = firstName;
      }
      if (lastName) {
        user.lastName = lastName;
      }
      if (password) {
        user.password = password;
      }

      await user.save();

      const userUpdated = await Users.findByPk(user_id, {
        attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      });
      return  userUpdated;
    } catch (error) {
      throw error; 
    }
  }

  static async deleteUser(user_id) { 
   try {
      const user = await Users.findByPk(user_id);

      if (user) {
        user.destroy();
        return user;
      } else {
        return json([{ message: "user not found" }]);
      }
    } catch {
      throw error; 
    }
  }
}

module.exports = usersServices;

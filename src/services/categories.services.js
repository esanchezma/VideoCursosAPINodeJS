const Categories = require("../models/categories.models");


class categoriesServices {
    
    static async getAll(){
       try {
        const categories = await Categories.findAll();
        return categories;
       } catch (error) {
        throw (error);
       };
    };

    static async create(name){
        
        try {
        const {name} = name
        const category = await Categories.create(name);
        return category;

        } catch (error) {

            throw (error);
        };

    };

    static async update(category_id,name){
        
        try {
            const {category_id} = category_id;
            const {name} = name;
            const category = await Categories.findByPk(category_id)
            if (category) {
                category.name = name;
                
                category.save();
                return category; 
            }else{
                return json([{ message: "category not found" }]);
            }                 
            
        } catch (error) {
            throw error;            
        };
    };

    static async remove(category_id){
        
        try {
            const category = await Categories.findByPk(category_id)
            if(category){
                category.destroy()
                res.sendStatus(202);

            } else {
             res.status(500).json([{ message: "category not found"}]);
            };
        } catch (error) {
            throw error;            
        };
    };


};

module.exports = categoriesServices;
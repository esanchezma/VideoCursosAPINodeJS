const {categoriesServices}  = require("../services");

const getAll = async (req, res)=> {
       try {
        const categories = await categoriesServices.getAll();
        res.status(200).json(categories)
       } catch (error) {
        res.sendStatus(500)
       };
    };

    const create = async (req, res)=> {
        
        try {
        const {name} = req.body
        const category = await categoriesServices.create({name});
        res.status(201).json(category)
        } catch (error) {
            res.sendStatus(500)

        };

    };

    const update = async (req, res)=> {
        
        try {

            const {category_id} = req.params;
            const {name} = req.body;
            const category = await categoriesServices.update(category_id,name)
            res.status(202).json(category);

        } catch (error) {
            res.status(500).json({error});            
        };
    };

    const remove = async (req, res)=> {
        
        try {
            const {category_id} = req.params;
            const category = await categoriesServices.remove(category_id)
            res.sendStatus(202);

        } catch (error) {
            res.status(500).json({error});
            
        };
    };




    module.exports = {
        getAll,
        create,
        update,
        remove,    
      };
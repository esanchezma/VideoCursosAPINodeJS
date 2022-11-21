const {videosServices}  = require("../services");


const create = async (req, res) => {
        try {
            const newVideo = req.body;
            const video = await videosServices.create(newVideo);
            res.status(201).json(video)
        } catch (error) {
            res.status(400).json({error: error})
        };
    };

    const getAll = async (req, res)=> {
        try {
            const videos = await videosServices.getAll();
            res.status(200).json(videos);
        } catch (error) {
            res.sendStatus(500)
            
        };
    };

    const remove = async (req, res)=> {
       
        try {
            const {video_id}= req.params;
            const video = await videosServices.remove(video_id)
            res.sendStatus(202).json(video);;           
        } catch (error) {
            res.status(500).json([{ message: "video not found"}]);
        }
    }


    module.exports = {
        create,
        getAll,
        remove     
      };
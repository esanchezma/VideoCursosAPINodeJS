const Videos = require("../models/videos.models");

class videosServices {
    static async create (newVideo){
        const {title, url, courseId} =newVideo;
        try {
            const video = await Videos.create({title, url, courseId});
            return video;
        } catch (error) {
            throw error;
        };
    };

    static async getAll (){
        try {
            const videos = await Videos.findAll();
            return videos;
        } catch (error) {
            throw error;
            
        };
    };

    static async delete (video_id){
        const {video_id}= video_id;
        try {
            const video = await Videos.findByPk(video_id)
            if (video) {
                video.destroy();
                return video;
            } else  {
                return json([{ message: "video not found"}]);
            }
        } catch (error) {
            throw error;
        }
    }
};

module.exports = videosServices;
const {Router} = require('express');
const { getAll, create,remove } = require("../controllers");

const router = Router();

router.post('/videos', create);
router.get('/videos', getAll);
router.delete('/videos/:video_id', remove);


module.exports = router;
const {Router} = require('express');
const { getAll, create, getOne,getAllInfo,update, remove, } = require("../controllers");
  
       
const router = Router();

router.post('/courses', create);
router.get('/courses/info', getAllInfo);
router.get('/courses', getAll);
router.get('/courses/:course_id', getOne);
router.patch('/courses/:course_id', update);
router.delete('/courses/:course_id', remove);


module.exports = router;
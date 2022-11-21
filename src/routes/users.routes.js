const {Router} = require('express');
const { getAll, create, getCoursesByUser,getOne, updatePartial, removeUser } = require("../controllers");

const router = Router();

router.get('/users', getAll);
router.post('/users', create);
router.get('/users/:user_id/courses', getCoursesByUser);
router.get('/users/:user_id',getOne);

router.patch('/users/:user_id',updatePartial);
router.delete('/users/:user_id',removeUser);


module.exports = router;
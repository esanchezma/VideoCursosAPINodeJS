const { Router } = require('express');
const { create,  getAll } = require("../controllers");
const router = Router();

router.get('/users/courses', getAll);
router.post('/users/courses', create);



module.exports = router;
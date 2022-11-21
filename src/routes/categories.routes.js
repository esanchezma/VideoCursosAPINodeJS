const {Router} = require('express');
const { create, getAll, update, remove } = require("../controllers");
const router = Router();



router.get('/categories', getAll);
router.post('/categories', create);
router.put('/categories/:category_id', update);
router.delete('/categories/:category_id', remove);

module.exports = router;
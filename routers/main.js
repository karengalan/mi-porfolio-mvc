const { application } = require('express');
const express =require('express');
const router = express.router();
const {} = require('../controllers/mainController');

application.set('view engine',path.join(__dirname,'views'))

router.get('/', home);
router.get('/about', about);

module.exports = router;
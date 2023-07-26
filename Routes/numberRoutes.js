const express = require('express');
const numberController = require('../controllers/numberController')
const router = express.Router();

router.get('/',numberController.getNumber);

module.exports = router;
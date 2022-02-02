const express = require('express');
const router = express.Router();
const referalController = require('../controllers/referalController');

router.post("/reward", referalController.referal);

module.exports = router;
'use strict';

const fs = require('fs')
  , multer  = require('multer')
  , router = require('express').Router();

router.get('/', (req, res) => res.end(fs.readFileSync(__dirname + '/form.html')));
router.post('/getsize', multer().single('file'), (req, res) => res.json({ size: req.file.size }));

module.exports = router;

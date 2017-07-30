var express = require('express');
var multer = require('multer');
var stroge = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './imgs')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

var upload = multer({ storage: stroge })

var app = express();
app.use(express.static('static'));
app.post('/uploading', upload.array('imgfile', 40), function (req, res, next) {
  var files = req.files;
  console.log(files);
  if (!files[0]){
    res.send('error')
  } else {
    res.send('success')
  }
  console.log(files)
})

var server = app.listen(9000, '192.168.0.105', function () {
  console.log('server is runing at prot 9000')
})
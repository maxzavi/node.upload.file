const express = require('express');
const multer = require("multer");

const app = express();

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./files"); //important this is a direct path from our current file to storage location
    },
    filename: (req, file, cb) => {
      cb(null, "Upload_"+ file.originalname);
    },
  });

const upload = multer({ storage: fileStorageEngine });
 
//'file' name in field file
app.post('/upload', upload.single('filename') , (req, res)=>{
    res.send(`File ${req.file.filename} upload OK!!`);
});
  
app.listen(3000,()=>{
    console.log('Server ready!!!!');
});

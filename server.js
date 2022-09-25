const express = require('express');
const multer = require("multer");

const app = express();

const pathTarget='/files';
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, pathTarget); //important this is a direct path from our current file to storage location
  },
  filename: (req, file, cb) => {
    cb(null, "Upload_"+ file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });
 
//'file' name in field file
app.post('/upload', upload.single('filename') , (req, res)=>{
  //Rename after post file
  fs.renameSync(`${pathTarget}/Upload_${req.file.originalname}`, 
    `${pathTarget}/${req.file.originalname}`);
  res.send(`File ${req.file.filename} upload OK!!`);
});
  
app.listen(3000,()=>{
    console.log('Server ready!!!!');
});

# Server with upload file

Using node.js, express and multer, for dev use nodemon module

Create project with **npm init -y**

```cmd
npm init -y
```

Add modules express and multer

```cmd
npm i express
npm i multer
```

Add file server.js, content:

```javascript
const express = require('express');

const app = express();

app.listen(3000,()=>{
    console.log('Server ready!!!!');
});
```

In dev, add nodemon module:
```cmd
npm i nodemon -D
```

For use, in **package.json** file, add "dev":"nodemon server" in "scripts":

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"nodemon server"
  },
```

Run with **npm run dev**
```cmd
npm run dev
```
Set  direct path fron our current file to storage location, in this case add folder "files", and set in **multer.diskStorage**

```javascript
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./files"); //important this is a direct path from our current file to storage location
    },
    filename: (req, file, cb) => {
      cb(null, "Upload_"+ file.originalname);
    },
  });
```

in app.post, use filename field, used in post method, in this case upload file from path **/Users/maxzavaleta/Downloads/File20220922_084026.txt**

```cmd
curl --location --request POST 'http://localhost:3000/upload' \
--form 'filename=@"/Users/maxzavaleta/Downloads/File20220922_084026.txt"'
```

By git clone, after create folder **files** in home, and run **npm i**
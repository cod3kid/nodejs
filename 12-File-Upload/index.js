const express = require('express')
const multer = require('multer')
const app = express()


const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}


const upload = multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')

app.post('/upload-file', upload, (req, res) => {
    try {
        res.send('file upload success')
    } catch (ex) {
        res.send('Error')
    }
})

app.get('/download', function (req, res) {
    const file = `./uploads/1610901737882cat.jpeg`;
    res.download(file);
});


app.listen(4000, () => {
    console.log("Server Running On Port 4000")
})
let express = require('express');
let router = express.Router();
let upload = require('../config/multer.config.js');
 
const fileWorker = require('../controllers/file.controller.js');
 
router.post('/api/file/upload', upload.single("file"), fileWorker.uploadFile);
 
router.get('/api/file/all', fileWorker.listAllFiles);
 
router.get('/api/file/:id', fileWorker.downloadFile);
<<<<<<< HEAD

=======
 
>>>>>>> 7d2bba97b9eb2faa3acbfa42495cd98f7680fdd3
router.get('api/file/retrieve/:id', fileWorker.getFileById);
module.exports = router;
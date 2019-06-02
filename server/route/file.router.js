let express = require('express');
let router = express.Router();
let upload = require('../config/multer.config.js');
 
const fileWorker = require('../controllers/file.controller.js');
 
router.post('/api/file/upload', upload.single("file"), fileWorker.uploadFile);

// router.post('/api/savestudentprofiledata/uploadspdata' , upload.single("file") , fileWorker.uploadStudentProfiles );

// router.post('/api/saveuseraccountdata/uploaduadata' , upload.single("file") , fileWorker.uploadUserAaccounts );
 
router.get('/api/file/all', fileWorker.listAllFiles);
  
router.get('/api/file/:id', fileWorker.downloadFile);

router.post('/api/profile/tex', fileWorker.downloadTex) 

// router.put('api/profile/pdf', fileWorker.downloadPdf)
// router.get('api/file/retrieve/:id', fileWorker.getFileById);

router.delete('/api/file/:id', fileWorker.deleteFile);

module.exports = router;
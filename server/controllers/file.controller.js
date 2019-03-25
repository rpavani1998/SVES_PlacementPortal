var stream = require('stream');

const db = require('../config/db.config.js');
const File = db.files;

exports.uploadFile = (req, res) => {
	console.log(req, req.body.id)
	console.log(req.body.id, req.file.mimetype, req.file.originalname, req.file.buffer)
	File.create({
		id: req.body.id,
		type: req.file.mimetype,
		name: req.file.originalname,
		data: req.file.buffer
	}).then(() => {
		res.json({msg:'File uploaded successfully! -> filename = ' + req.file.originalname});
	})
}

exports.updateFile = (req, res) => {
	const id = req.params.id;
	console.log("Update",education_detail)
	EducationDetails.update(education_detail, 
					 { where: {id: id
					} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a File with id = " + req.body.roll_no + " "+ req.body.certificate_degree_name + " " + req.body.major});
				   });	
};
 
exports.deleteFile = (req, res) => {
	const id = req.params.id;
	EducationDetails.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a File with id = ' + req.body.roll_no + " "+ req.body.certificate_degree_name + " " + req.body.major});
	});
};

exports.listAllFiles = (req, res) => {
	File.findAll({attributes: ['id', 'name']}).then(files => {
	  res.json(files);
	});
}

{/* <img src="data:image/png;base64,{{c.logo}}" class="rounded-circle" width="45" height="45"></td> */}

exports.getFileById = (req, res) => {
	File.findById(req.params.id).then(file => {
		res,json(file)
	})
}

exports.downloadFile = (req, res) => {
	File.findById(req.params.id).then(file => {
		var fileContents = Buffer.from(file.data, "base64");
		var readStream = new stream.PassThrough();
		readStream.end(fileContents)
		
		res.set('Content-disposition', 'attachment; filename=' + file.name);
		res.set('Content-Type', file.type);

		readStream.pipe(res);
	})
}
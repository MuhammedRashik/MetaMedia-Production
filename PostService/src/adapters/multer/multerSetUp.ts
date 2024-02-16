import multer from 'multer';
import path from 'path';

const storage: multer.StorageEngine = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/postData');
    },
    
    
    filename: function (req, file:any, callback) {
        console.log('iam herer',file);
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }

});

const upload = multer({ storage: storage });

export {
    upload
}
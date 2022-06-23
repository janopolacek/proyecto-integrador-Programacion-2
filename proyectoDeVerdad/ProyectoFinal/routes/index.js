const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController')
//dos modulos multer 
const multer=require('multer');
const path=require('path');
//config del multer 
var storage = multer.diskStorage({

    destination: (req, file, cb) => {//nesesita una funcion con tres parametros req file y una funcion call back 
      cb(null, 'public/images/profilPic')  //ruta hacia una carpeta, donde se van a guerdar los archivos 
      //la carpeta debe existir
    },
    filename: (req, file, cb) =>{
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }});
    
    var upload = multer({storage: storage})


/* GET home page. */
router.get('/', indexController.lista);

router.get('/register', indexController.register);
router.post('/register/store',upload.single('image'), indexController.store) ;//action del formulario 


router.get('/login', indexController.login);
router.post('/login',indexController.signin);
router.post('/logout', indexController.logout);
module.exports = router;


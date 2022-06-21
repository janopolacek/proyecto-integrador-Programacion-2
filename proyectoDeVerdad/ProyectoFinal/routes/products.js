const express = require ('express')
const router = express.Router();
const productsControlador = require("../controller/productsController")

const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({

    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../public/images/products'))
    },
    filename: (req, file, cb) =>{
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }});
    
    var upload = multer({storage: storage})

// product add
router.get ("/products-add", productsController.productosAdd)

router.post('guardar/', upload.single('imagen') , productsController.guardar)
// product edit 
router.get ("/products-edit/:id", productsController.productosEdit)

router.get ("/products/:id", productsController.productos)

router.post("/delete/:id?" ,productsController.delete)

router.post("/comentario/:id?" , productsController.comentario)

router.post("/edited/:id", upload.single('imagen'), productsController.edited)

module.exports = router; 
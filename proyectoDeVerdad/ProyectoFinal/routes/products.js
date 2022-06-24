
const express = require ('express')
const router = express.Router();
const productsController = require("../controller/productsController")

const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({

    destination: (req, file, cb) => {
      cb(null, 'public/images/products')
    },
    filename: (req, file, cb) =>{
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }});
    
    var upload = multer({storage: storage})

// product add
router.get ("/products-add", productsController.productosAdd)

router.post('/products-add/', upload.single('image') , productsController.guardar)


// product edit 
router.get ("/products-edit/:id", productsController.productosEdit)

router.get ("/:id", productsController.detail)


router.post("/comentario/:id?" , productsController.comentario)

router.post("/edited/:id", upload.single('image'), productsController.edited)

//product delete
router.get ("/delete/:id", productsController.delete)

//search
router.get ("/search/results", productsController.search)



module.exports = router;
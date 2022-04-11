const data = require('../db/db')

const indexControlador = {
    lista: function (req, res) {
        return res.render('index', {
            listadoAlfajores: data.data.alfajores,
            
        })
    },
    marca: function (req, res) {
        
    },
    marca: function (req, res) {
        
    },
    marca: function (req, res) {
        
    },
}

for (let i = 0 < listadoAlfajores.length; i++) {
    const element =
    <div class="col-12 col-sm-6 col-lg-3">
    <section class="product-box">
        <a href="product.html">
            <figure class="product-box_image">
                <img src="images/products/default-image.png" alt="cafetera moulinex">
            </figure>
            <article class="product-box_data">
                <h2> <%= listadoAlfajores.nombre[i]  %>   </h2>
                <p>Descripción:<%= listadoAlfajores.Descripción[i] %> </p>
              <p> comentarios: 12  </p>
            </article>
        </a>
    </section>
</div>
    
}

module.exports = indexControlador 

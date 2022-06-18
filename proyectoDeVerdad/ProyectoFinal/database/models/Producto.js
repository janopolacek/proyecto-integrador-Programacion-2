module.exports = function (sequelize, dataTypes){

    //Definir un alias. El alias me permite identificar al modelo cuando lo usamos en el controlador.

    let alias = 'Producto';

    //Columnas y sus características
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            type: dataTypes.INTEGER(200),
        },
        nombre:{
            type:dataTypes.STRING(200)
        },
        descripcion:{
            type:dataTypes.STRING
        },
        fechaCarga:{
            type:dataTypes.DATETIME
        },
        precio:{
            type:dataTypes.SMALLINT(6)
        },
        createdAt:{
            type:dataTypes.DATETIME
        },
        updatedAt:{
            type:dataTypes.DATETIME
        },
    }

    //Configuraciones adicionales
    let config = {
        tableName: 'alfajores', //Nombre de la tabla en la base de datos.
        timestamps: false, //Si la tabla no tiene los campos createdAt y updatedAt. En caso contrario, va true
        underscored: false, //Si la tabla tiene columnas con nombres usando guiones bajos. En caso contrario, va false
    }

    const Producto = sequelize.define(alias, cols, config);

    //Relaciones entre tablas.

    return Producto;
}
module.exports = function (sequelize, dataTypes){

    //Definir un alias. El alias me permite identificar al modelo cuando lo usamos en el controlador.

    let alias = 'comentario';

    //Columnas y sus características
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            notNull: true,
            type: dataTypes.INTEGER,
        },
        comentarios:{
            type:dataTypes.STRING(400)
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
        tableName: 'comentarios', //Nombre de la tabla en la base de datos.
        timestamps: false, //Si la tabla no tiene los campos createdAt y updatedAt. En caso contrario, va true
        underscored: false, //Si la tabla tiene columnas con nombres usando guiones bajos. En caso contrario, va false
    }

    const comentario = sequelize.define(alias, cols, config);

    
    //Relaciones entre tablas.


    return comentario;
}
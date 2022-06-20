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
            type:dataTypes.STRING(600)
        },
        Users_id:{
            type:dataTypes.INTEGER
        },
        Products_id:{
            type:dataTypes.INTEGER
        },
        createdAt:{
            type:dataTypes.DATE
        },
        updatedAt:{
            type:dataTypes.DATE
        },
        deletedAt:{
            type: dataTypes.DATE
        }
    }

    //Configuraciones adicionales
    let config = {
        tableName: 'comentarios', //Nombre de la tabla en la base de datos.
        timestamps: true, //Si la tabla no tiene los campos createdAt y updatedAt. En caso contrario, va true
        underscored: true, //Si la tabla tiene columnas con nombres usando guiones bajos. En caso contrario, va false
    }

    const comentario = sequelize.define(alias, cols, config);

    //Relaciones entre tablas.
    comentario.associate = function(models){
        comentario.belongsTo(models.Producto,
            {
                as: 'productoComentado',
                foreignKey: 'Products_id'
            });

        comentario.belongsTo(models.Usuario,
            {
                as: 'comentador',
                foreignKey: 'Users_id'
            });

    }

    return comentario;
}
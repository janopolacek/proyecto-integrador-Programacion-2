module.exports = function (sequelize, dataTypes){

    //Definir un alias. El alias me permite identificar al modelo cuando lo usamos en el controlador.

    let alias = 'Producto';

    //Columnas y sus características
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            notNull: true,
            type: dataTypes.INTEGER,
        },
        nombre:{
            notNull: true,
            type:dataTypes.STRING(200),
        },
        descripcion:{
            notNull: true,
            type:dataTypes.STRING,
        },
        fechaCarga:{
            notNull: true,
            type:dataTypes.DATETIME,
        },
        precio:{
            notNull: true,
            type:dataTypes.SMALLINT,
        },
        Users_id: {
            type: dataTypes.INTEGER,
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
        tableName: 'PRODUCTS', //Nombre de la tabla en la base de datos.
        timestamps: true, //Si la tabla no tiene los campos createdAt y updatedAt. En caso contrario, va true
        underscored: true, //Si la tabla tiene columnas con nombres usando guiones bajos. En caso contrario, va false
    }

    const Producto = sequelize.define(alias, cols, config);

    //Relaciones entre tablas.
    
    Producto.associate = function(models){
        Producto.belongsTo(models.Usuario,
            {
                as: 'propietario',
                foreignKey: 'Users_id'
            });
        Producto.hasMany(models.Comentario, // 1 producto tiene n comentarios
            {
                as: 'comentarios',
                foreignKey: 'Products_id'
            });
    }

    return Producto;
}
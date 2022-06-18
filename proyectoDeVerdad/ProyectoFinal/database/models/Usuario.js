module.exports = function (sequelize, dataTypes) {

    //Definir un alias. El alias me permite identificar al modelo cuando lo usamos en el controlador.

    let alias = 'Usuario';

    //Columnas y sus características
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            type: dataTypes.INTEGER(11),
        },
        usuario:{
            type:dataTypes.STRING(200)
        },
        mail:{
            notNull: true,
            unique: true,
            type:dataTypes.STRING(255),
        },
        password:{
            type:dataTypes.STRING(255)
        },
        fechaNacimiento:{
            type:dataTypes.DATE
        },
        numeroDocumento:{
            type:dataTypes.INTEGER(11)
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
        tableName: 'usuarios', //Nombre de la tabla en la base de datos.
        timestamps: false, //Si la tabla no tiene los campos createdAt y updatedAt. En caso contrario, va true
        underscored: false, //Si la tabla tiene columnas con nombres usando guiones bajos. En caso contrario, va false
    }

    const Usuario = sequelize.define(alias, cols, config);


    //Relaciones entre tablas.


    return Usuario;
}
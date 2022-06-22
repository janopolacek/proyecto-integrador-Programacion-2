module.exports = function (Sequelize,DataTypes){ //el modelo exporta una funcion
    
    //definir un alias que va a ser el nombre con el que vamos a llamar al modelo cuando estemos en el controlador
    let alias = 'Producto';

    //columnas y sus propiedades
    let cols = {
        id:{
            primaryKey: true,
            notNull: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        image:{
            notNull: true,
            type: DataTypes.STRING,
        },
        nombre: {
            notNull: true,
            type: DataTypes.STRING,
        },
        descripcion:{
            notNull: true,
            type: DataTypes.STRING,
        },
        createdAt:{
            notNull: true,
            type: DataTypes.DATE,
        },
        updatedAt:{
            type: DataTypes.DATE,
        },
        
        UsersId:{
            notNull:true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
    }
    //CONFIGURACIONES ADICIONALES
    let config = { //puede no estar, cuando el nombre de la tabla es el nombre del modelo en plural
        tableName: 'producto',
        timestamps: true, //le dice al modelo si la tabla estan las columnas updatedAt y createdAt
        underscored: false, //si la tabla tiene columnas con nombres usando _.
    }
    const Producto = Sequelize.define(alias, cols, config);

    //Relaciones entre tablas --> un telefono (1) pertenece a un usuario (n)

    Producto.associate = function(models){
        Producto.belongsTo(models.Users,
            {
                as: 'Propietario',
                foreignKey: 'UsersId'
            });
        Producto.hasMany(models.Comment,
            {
                as: 'comentarios',
                foreignKey: 'id'
            });
    }



    return Producto;
}

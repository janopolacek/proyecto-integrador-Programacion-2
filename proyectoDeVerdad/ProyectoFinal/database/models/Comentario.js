module.exports = function (Sequelize,DataTypes){ 
    
    //definir un alias que va a ser el nombre con el que vamos a llamar al modelo cuando estemos en el controlador
    let alias = 'Comment';

    //columnas y sus propiedades
    let cols = {
        id:{
            primaryKey: true,
            notNull: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        text:{
            notNull: true,
            type: DataTypes.STRING,
        },
        productoId: {
            notNull: true,
            type: DataTypes.INTEGER,
        },
        usersId: {
            notNull: true,
            type: DataTypes.INTEGER,
        },
        createdAt:{
            notNull: true,
            type: DataTypes.DATE,
        },
        updatedAt:{
            type: DataTypes.DATE,
        }
    }
    //CONFIGURACIONES ADICIONALES
    let config = { 
        tableName: 'comments',//puede no estar, cuando el nombre de la tabla es el nombre del modelo en plural
        timestamps: true, //le dice al modelo si la tabla estan las columnas updatedAt y createdAt
        underscored: false, //si la tabla tiene columnas con nombres usando _.
    }

    const Comment = Sequelize.define(alias, cols, config);

    //Relaciones entre tablas

    Comment.associate = function(models){
        Comment.belongsTo(models.Producto,
            {
                as: 'CommentsProducts',
                foreignKey: 'ProductoId'
            });

        Comment.belongsTo(models.Users,
            {
                as: 'UsersComments',
                foreignKey: 'UsersId'
            });

    }

    return Comment;
}
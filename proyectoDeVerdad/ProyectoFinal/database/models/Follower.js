module.exports = function (Sequelize,DataTypes){ //el modelo exporta una funcion
    
    //definir un alias que va a ser el nombre con el que vamos a llamar al modelo cuando estemos en el controlador
    let alias = 'Followers';

    //columnas y sus propiedades
    let cols = {
        id:{
            primaryKey: true,
            notNull: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        UsersId:{
            notNull: true,
            type: DataTypes.INTEGER,
        },
        FollowerId:{
            notNull: true,
            type: DataTypes.INTEGER,
        },
    }
    //CONFIGURACIONES ADICIONALES
    let config = { //puede no estar, cuando el nombre de la tabla es el nombre del modelo en plural
        tableName: 'Followers',
        timestamps: false, //le dice al modelo si la tabla estan las columnas updatedAt y createdAt
        underscored: false, //si la tabla tiene columnas con nombres usando _.
    }
    const Followers = Sequelize.define(alias, cols, config);

    /*
    UserFollower.associate = function(models){
        UserFollower.belongsToMany(models.Followers, {
        as: "Followers",
        through: "user_follower",
        foreignKey: "user_id",
        otherKey: "follower_id",
        timestamps: false
        });
    }
        */
    return Followers;
 }
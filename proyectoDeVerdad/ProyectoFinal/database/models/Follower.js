module.exports = function (sequelize, dataTypes){

    //Definir un alias. El alias me permite identificar al modelo cuando lo usamos en el controlador.

    let alias = 'Follower';

    //Columnas y sus características
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            notNull: true,
            type: dataTypes.INTEGER,
        },
        User_id:{
            type:dataTypes.INTEGER
        },
        Follower_id:{
            type:dataTypes.INTEGER
        }
    }

    //Configuraciones adicionales
    let config = {
        tableName: 'Followers', //Nombre de la tabla en la base de datos.
        timestamps: false, //Si la tabla no tiene los campos createdAt y updatedAt. En caso contrario, va true
        underscored: true, //Si la tabla tiene columnas con nombres usando guiones bajos. En caso contrario, va false
    }

    const Follower = sequelize.define(alias, cols, config);
    
    //Relaciones entre tablas.

    Follower.associate = function(models){
        Follower.belongsToMany(models.Follower, {
        as: "Followers",
        through: "user_follower",
        foreignKey: "User_id",
        otherKey: "Follower_id",
        timestamps: false
        });
}

    return Follower;
}
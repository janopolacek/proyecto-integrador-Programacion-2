module.exports = function (Sequelize,DataTypes){
    
    let alias="Users"
    
    let cols={
        id:{
            autoIncrement: true,
            notNull: true,
            primaryKey:true,
            type: DataTypes.INTEGER,
        },
        email:{
            notNull: true,
            type: DataTypes.STRING,
            
        },
        username:{
            notNull: true,
            type: DataTypes.STRING,
        },
        password:{
            notNull: true,
            type: DataTypes.STRING,
        },
        dni:{
            notNull: true,
            type: DataTypes.INTEGER,
        },
       image:{
            notNull: true,
            type: DataTypes.STRING,
        },
        /*createdAt:{
            notNull: true,
            type: DataTypes.DATE,
        },*/
        updatedAt:{
            type: DataTypes.DATE,
        }
        
    }
    let config={
        tableName: 'users',
        timestamps: true, //le dice al modelo si la tabla estan las columnas updatedAt y createdAt
        underscored: false,

    }
    const Users = Sequelize.define(alias, cols, config);

//Relaciones entre tablas

Users.associate = function(models){
    Users.hasMany(models.Producto, 
        {
            as: 'posteos',
            foreignKey: 'id'
        });

    Users.hasMany(models.Comment,
        {
            as: 'comentarios',
            foreignKey: 'id'
        });
}

return Users;
}
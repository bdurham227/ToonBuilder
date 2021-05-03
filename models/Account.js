const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Account extends Model {}

Account.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        account_name: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
            },
        },
        user_id:{
            type:DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        // character_id: {
        //     type:DataTypes.INTEGER,
        //     reference: {
        //         model: "character",
        //         key: 'id',
        //     },
        // },
        // account_id: {
        //     type:DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'account',
        //         key: 'id',
        //     },
        // },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        modelName: 'account',
    },
);

module.exports = Account;
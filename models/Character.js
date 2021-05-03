const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Character extends Model{}

Character.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        character_name: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
            },
        },
        character_class: {
            type:DataTypes.STRING,
            allowNull: false
        },
        character_level: {
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        user_id:{
            type:DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        account_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'account',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        modelName: 'character',
    },
);

module.exports = Character;
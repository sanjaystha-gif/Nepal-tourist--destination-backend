const {Datatypes}=require('sequelize')
const sequelize=require('../database/db')
const { types } = require('pg')

const Test=sequelize.define('Test',{
id:{
    id: Datatypes.INTERGER,
    primaryKey: true,
    autoIncrement: true,
},
name:{
    type:Datatypes.STRING,
    allowNull:false
},
email:{
    type:Datatypes.STRING,
    allowNull:false,
    unique: true,
    },
});
module.exports=Test;
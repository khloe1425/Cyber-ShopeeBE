const db=require('../config/db')
const { DataTypes } = require('sequelize')
const OrderItem=db.define('OrderItem',{
    orderId:{
        type:DataTypes.INTEGER, 
    },
    itemId:{
        type:DataTypes.INTEGER,
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{tableName:'order_items',timestamps:false})



module.exports=OrderItem

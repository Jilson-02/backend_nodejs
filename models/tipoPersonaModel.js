import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const tipopersona = sequelize.define("TipoPersona",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},
{
    timestamps:false
});
import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { tipopersona } from "./tipoPersonaModel.js";

export const persona = sequelize.define("Persona", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cedula: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    especialidad: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    tipoPersona_id: { // Cambiado de tipoPersona a tipoPersona_id
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
});

tipopersona.hasMany(persona, { foreignKey: "tipoPersona_id" });
persona.belongsTo(tipopersona, { foreignKey: "tipoPersona_id" });

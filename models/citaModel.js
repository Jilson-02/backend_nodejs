import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { persona } from "./personaModel.js";

export const cita = sequelize.define("Cita", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    medicina: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fechaHora: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    persona_id: { // Cambiado de tipoPersona a tipoPersona_id
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
});

persona.hasMany(cita, { foreignKey: "persona_id" });
cita.belongsTo(persona, { foreignKey: "persona_id" });

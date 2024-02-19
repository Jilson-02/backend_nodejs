import { cita } from "../models/citaModel.js";

export const reservarcitas = async (req, res) => {
    try {
        const { medicina, fechaHora, persona_id } = req.body;
        if (!medicina || !fechaHora || !persona_id) {
            return res.status(400).json({ msg: 'Faltan datos' });
        }
        const fechaHoraString = new Date(fechaHora).toISOString();

        const nuevaCita = await cita.create({
            medicina,
            fechaHora: fechaHoraString,
            persona_id
        });

        return res.status(200).json({ msg: 'Cita reservada exitosamente', cita: nuevaCita });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

export const mostrarCitas = async (req, res) => {
    try {
        const citas = await cita.findAll();
        if (citas && citas.length > 0) {
            return res.status(200).json({ citas: citas });

        } else {
            return res.status(404).json({ message: 'No se encontraron citas' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Error en el servidor' });
    }
};

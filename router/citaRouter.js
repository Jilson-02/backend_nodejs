import express from 'express';
import { reservarcitas, mostrarCitas } from "../controller/citasController.js"

const rotuerCita = express.Router();

rotuerCita.post('/cita', reservarcitas);
rotuerCita.get('/cita', mostrarCitas);

export default rotuerCita;
import express from 'express';
import { store, buscarEspecialidad } from "../controller/personaController.js"

const rotuerPersona = express.Router();

rotuerPersona.post('/persona', store);
rotuerPersona.get('/persona/buscar/:especialidad', buscarEspecialidad);
// rotuer.put('/type/users/:id',verifyToken, updateTypeUsers);
// rotuer.delete('/type/users/:id',  deleteTypeUsers);


export default rotuerPersona;
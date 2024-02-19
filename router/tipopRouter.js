import express from 'express';
import { getTipoPersona } from '../controller/tipoPersonaController.js';

const rotuertipo = express.Router();

rotuertipo.get('/tipo', getTipoPersona);
// rotuer.post('/type/users', createTypeUsers);
// rotuer.put('/type/users/:id',verifyToken, updateTypeUsers);
// rotuer.delete('/type/users/:id',  deleteTypeUsers);


export default rotuertipo;
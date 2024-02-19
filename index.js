
import express from 'express';
import cors from "cors";
import { PORT } from './config/config.js';
import rotuerTypeUsers from './router/TypeUsersRouter.js';
import  { RouterUsuer } from './router/UserRouter.js';
import { sequelize } from "./db/conexion.js";
import { tipopersona } from './models/tipoPersonaModel.js';
import { persona } from './models/personaModel.js';
import { cita } from './models/citaModel.js';
import  rotuertipo  from './router/tipopRouter.js';
import rotuerPersona from './router/personaRouter.js';
import rotuerCita from './router/citaRouter.js';


const _PORT = PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', rotuertipo);
app.use('/api', rotuerPersona);
app.use('/api', rotuerCita);

const main = async () => {
    try {
        await sequelize.authenticate();
        console.log('Base de datos conectada.');
        await sequelize.sync({ alter: false })
        app.listen(_PORT, () => {
            console.log(`Servidor corriendo en el puerto :${_PORT}`);
        });
    } catch (error) {
        console.log(`Error ${error}`);
    }
}
main();


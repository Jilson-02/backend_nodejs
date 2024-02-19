import { tipopersona } from "../models/tipoPersonaModel.js"

export const  getTipoPersona = async (req, res) => {
    try{
        const tipo = await tipopersona.findAll();
        if(!tipo){
            return res.status(404).json({mensaje: 'No hay categorías registradas'})
        }else{
            res.status(200).json({messagw:'Lista de Categorias', tipo});
        }
    }catch(err){
        res.status(500).json({message: 'Error en el servidor'});
    }
}
import { persona } from "../models/personaModel.js";

export const store = async (req, res) => {
  try {
    const { nombre, apellido, cedula, correo, telefono, especialidad, tipoPersona_id } =
      req.body;
    if (!(nombre || apellido || cedula || correo || telefono || especialidad || tipoPersona_id )) {
      res.status(400).json({ message: "Existen campos vacias" });
    }

    const validatos = await persona.findOne({
      where: { correo: correo, telefono: telefono },
    });
    if (validatos) {
      return res.status(409).json("El Correo o Telefono ya existen");
    }
    // Create user in our database
    const users = await persona.create({
      nombre,
      apellido,
      cedula,
      correo: correo.toLowerCase(), // sanitize: convert email to lowercase
      telefono,
      especialidad,
      tipoPersona_id
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// export const buscarEspecialidad = async (req, res) => {
//     try {
//         // Obtenemos la fecha de los parámetros de la consulta
//         const { especialidad } = req.query;
//         console.log(req.query)
//         // Verificamos que la fecha haya sido proporcionada
//         if (!especialidad) {
//             return res.status(400).json({ message: "Especialidad Requerida" });
//         }

//         // Buscamos los gastos que coincidan con la fecha proporcionada
//         const buscarporEspecialidad = await persona.findAll({
//             where: {
//               // Compara solo la parte de la fecha, ignorando la hora
//               especialidad: sequelize.where(sequelize.fn('DATE', sequelize.col('fechaTransaccion')), '=', fechaTransaccion)
//             },
//             attributes: ['descripcion', 'monto', 'fechaTransaccion'] // Atributos que quieres obtener
//           });
//         console.log(gastosPorFecha)

//         // Verificamos si se encontraron gastos
//         if (gastosPorFecha && gastosPorFecha.length > 0) {
//             return res.status(200).json({gastosfecha:gastosPorFecha}); // Enviamos los gastos encontrados como respuesta
//         } else {
//             return res.status(404).json({ message: 'No se encontraron gastos para la fecha proporcionada' }); // Mensaje de no encontrado
//         }
//     } catch (error) {
//         // Manejo de errores en caso de que algo falle durante la consulta a la base de datos
//         return res.status(500).json({ error: error.message });
//     }
// };


// ------

export const buscarEspecialidad = async (req, res) => {
    try {
        // Obtenemos la especialidad de los parámetros de la ruta
        const { especialidad } = req.params;

        // Verificamos que la especialidad haya sido proporcionada
        if (!especialidad) {
            return res.status(400).json({ message: "Especialidad requerida" });
        }

        // Buscamos las personas que coincidan con la especialidad proporcionada
        const personasPorEspecialidad = await persona.findAll({
            where: {
                especialidad: especialidad
            }
        });

        // Verificamos si se encontraron personas
        if (personasPorEspecialidad && personasPorEspecialidad.length > 0) {
            return res.status(200).json({ personas: personasPorEspecialidad });
        } else {
            return res.status(404).json({ message: 'No se encontraron personas para la especialidad proporcionada' });
        }
    } catch (error) {
        // Manejo de errores en caso de que algo falle durante la consulta a la base de datos
        return res.status(500).json({ error: error.message });
    }
};

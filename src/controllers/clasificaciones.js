import Clasificacion from '../models/Clasificacion';

const createClasificacion = async (args)=>{
    const clasificacion = new Clasificacion(args);
    try {
        const response = await clasificacion.save();
        return {
            status:200,
            success:true,
            message:'Registrado correctamente',
            clasificacion:response
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            error:formatErrors(error)
        }
    }
}

const readAllClasificaciones = async ()=>{
    try {
        const clasificaciones = await Clasificacion.find()
        if(!clasificaciones.length){
            return {
                status:404,
                success:false,
                message:'Sin registros'
            }
        }
        return {
            status:200,
            success:true,
            message:'Petición realizada con éxito',
            clasificaciones
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            error:formatErrors(error)
        }
    }
}

const readClasificacionById = async (args)=>{
    let clasificacionid = args._id;
    try {
        const clasificacion = await Clasificacion.findById(clasificacionid)
        if(!clasificacion){
            return{
                status:404,
                success:false,
                message:'No se encontró el registro'
            }
        }
        return {
            status:200,
            success:true,
            message:'Petición realizada con éxito',
            clasificacion
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            error:formatErrors(error)
        }
    }
}

const readSomeClasificaciones = async (args)=>{
    try {
        const clasificaciones = await Clasificacion.find().where(args.key).equals(args.value)
        if(!clasificaciones.length){
            return {
                status:404,
                success:false,
                message:'No se encontraron registros'
            }
        }
        return{
            status:200,
            success:true,
            message:'Petición realizada con éxito',
            clasificaciones
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            error:formatErrors(error)
        }
    }
}

const updateClasificacion = async (args)=>{
    let clasificacionid = args._id
    let update = args;
    try {
        const updated = await Clasificacion.findByIdAndUpdate(clasificacionid,update);
        return {
            status:200,
            success:true,
            message:'Registro actualizado',
            clasificacion:updated
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            error:formatErrors(error)
        }
    }
}

const deleteClasificacion = async (args)=>{
    let clasificacionid = args._id
    try {
        const clasificacion = await Clasificacion.findById(clasificacionid);
        if(!clasificacion){
            return{
                status:404,
                success:false,
                message:'No se encontró el registro'
            }
        }
        await clasificacion.remove();
        return{
            status:200,
            success:true,
            message:'Registro eliminado'
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            error:formatErrors(error)
        }
    }
}

export {
    createClasificacion,
    readAllClasificaciones,
    readClasificacionById,
    updateClasificacion,
    deleteClasificacion,
    readSomeClasificaciones
}
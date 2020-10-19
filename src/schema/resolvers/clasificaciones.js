import {
    createClasificacion,readAllClasificaciones,readClasificacionById,updateClasificacion,deleteClasificacion,readSomeClasificaciones
} from '../../controllers/clasificaciones';


export default {
    Query : {
        allClasificaciones : async (parent,args)=>{
            const response = await readAllClasificaciones();
            return response;
        },
        getClasificacionById : async (parent,args)=>{
            const response = await readClasificacionById(args);
            return response;
        },
        getClasificaciones : async (parent,args)=>{
            const response = await readSomeClasificaciones(args);
            return response;
        }
    },
    Mutation : {
        createClasificacion : async (parent,args)=>{
            const response = await createClasificacion(args);
            return response;
        },
        updateClasificacion : async (parent,args)=>{
            const response = await updateClasificacion(args);
            return response;
        },
        deleteClasificacion : async (parent,args)=>{
            const response = await deleteClasificacion(args);
            return response;
        }
    }
}
import bcrypt from 'bcryptjs';
import Usuario from '../models/Usuario';
import { formatErrors } from './errores';
import auth from '../middlewares/auth'

const SignUp = async (args) => {

    const saltpass = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(args.password,saltpass,null);
    args.password = hashpass;

    try {
        
        const usuario = new Usuario(args);
        const response = await usuario.save();

        return{
            success:true,
            status:200,
            message:'Usuario registrado exitosamente',
            usuario:response,
        }

    } catch (error) {
        return{
            success:false,
            status:500,
            error:formatErrors(error)
        }
    }
};

const SignIn = async (args) => {
    try {
        const response = await auth.login(args)
        if(response.error){ 
            return {
                success:false,
                status:500,
                message:'No se pudo authenticar',
                error:response.error
            }
        }
        return {
            success:true,
            status:200,
            message:'Petición realizada con éxito',
            token:response.token,
            usuario:response.usuario,
        }
    } catch (error) {
        return {
            success:false,
            status:500,
            error:formatErrors(error)
        }
    }
}

const AllUsuarios = async (args) => {

    try {
        const usuarios = await Usuario.find();

        if(!usuarios) return {
            success:false,
            status:404,
            error:{
                path:'AllUsuarios',
                message:'No se encontraron registros'
            }
        }

        return {
            success:true,
            status:200,
            message:'Petición atendida con éxito',
            usuarios
        }
    } catch (error) {
        return {
            success:false,
            status:500,
            error:formatErrors(error)
        }
    }

}

const ReadUsuarioById = async (args)=>{
    let usuarioid = args._id;
    try {
        const usuario = await Usuario.findById(usuarioid)
        if(!usuario) return {
            success:false,
            status:404,
            error:{
                path:'ReadUsuarioById',
                message:'No se encontraron registros'
            }
        }
        return {
            status:200,
            success:true,
            message:'Petición realizada con éxito',
            usuario
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'No se pudo completar la solicitud',
            error:formatErrors(error)
        }
    }
}

export {
    SignUp,
    AllUsuarios,
    SignIn,
    ReadUsuarioById
}
require('dotenv').config();
import bcrypt from 'bcryptjs';
import jwt from 'jwt-simple';
import Usuario from '../models/Usuario';

const secret = process.env.SECRET

const auth = {
    checkHeaders : async (req,res) => {
        const token = req.headers['x-token'];
        console.log(req.headers)
        if(token){
            try {
                const { user } = await jwt.decode(token,secret);
                console.log(user)
                return user;
            } catch (error) {
                const newToken = await auth.checkToken(token)
                req.user = newToken.user;
                if(newToken.token){
                    res.set("Access-Control-Expose-Headers","x-token")
                    res.set("x-token",newToken.token)
                }
            }
        }
    },
    checkToken : async (token) => {
        let idUser = null;
        try {
            const { user } = await jwt.decode(token,secret);
            idUser = user
        } catch (error) {
            return {}
        }
        const user = await Usuario.finById(idUser);
        const [newToken] = auth.createToken(user);
        return {
            user:user._id,
            token:newToken
        }
    },
    createToken : async (usuario) => {
        const newToken = await jwt.encode({usuario:usuario._id},secret);
        return [newToken]
    },
    login : async(args)=>{
        const {cedula,password} = args;
        const usuario = await Usuario.findOne({cedula})
        if(!usuario){
            return {
                error:{path:'cedula',message:'Usuario no existe'}
            }
        }
        const compared = await bcrypt.compare(password,usuario.password);
        if(!compared){
            return{
                errors:[{path:'password',message:'Contraseña inválida'}]
            }
        }
        const [newToken] = await auth.createToken(usuario);
        return {token:newToken,usuario}
    }
}

export default auth;


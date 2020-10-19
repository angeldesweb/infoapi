import { SignUp , AllUsuarios , SignIn, ReadUsuarioById } from '../../controllers/usuarios';
import { isAuthenticatedResolver } from '../../services';

export default {
    Query : {
        AllUsuarios : async (parent,args,context) => {
            const response = await AllUsuarios();
            return response;
        },
        getUsuarioById : async (parent,args,context) => {
            //console.log(context.user)
            const response = await ReadUsuarioById(args);
            return response;
        }
        
    },
    Mutation : {
        SignUp : async (parent,args) => {
            const response = await SignUp(args);
            return response;
        },
        SignIn : async (parent,args) => {
            const response = await SignIn(args);
            return response;
        }
    },
}
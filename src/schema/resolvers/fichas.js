require('dotenv').config();
import cloudinary from 'cloudinary'
import {
    createFicha,readAllFichas,readFichaById,readSomeFichas,updateFicha,deleteFicha
} from '../../controllers/fichas';

const processUpload = async upload =>{
    
    const { createReadStream } = await upload;
    const fileStream = createReadStream();
    cloudinary.v2.config({
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET,
        upload_preset:process.env.CLOUDINARY_UPLOAD_PRESET
    });
    
    return new Promise((resolve,reject) => {
        const cloudStream = cloudinary.v2.uploader.upload_stream({folder:process.env.FOLDER},function(err,fileUploaded){
            if (err) {
                reject(err);
            }
            resolve(fileUploaded);
        });
        fileStream.pipe(cloudStream);
    })
}
export default {
    Query : {
        allFichas : async (parent,args)=>{
            const response = await readAllFichas();
            return response;
        },
        getFichaById : async (parent,args)=>{
            const response = await readFichaById(args);
            return response;
        },
        getFichas : async (parent,args)=>{
            const response = await readSomeFichas(args);
            return response;
        }
    },
    Mutation : {
        createFicha : async (parent,args)=>{
            const response = await createFicha(args);
            return response;
        },
        singleUpload: async (parent, { file } ) => {
            const response = await processUpload(file.file)
            const {public_id,secure_url} = response;

            return {id:public_id,url:secure_url}
        },
        updateFicha : async (parent,args)=>{
            const response = await updateFicha(args);
            return response;
        },
        deleteFicha : async (parent,args)=>{
            const response = await deleteFicha(args);
            return response;
        }
    }
}
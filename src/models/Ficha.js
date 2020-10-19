import mongoose from 'mongoose';
import moment from 'moment'

const Schema = mongoose.Schema;

const Ficha = new Schema({
    codigo:{type:String,required:true,unique:true},
    titulo:{type:String,required:true},
    tipoInfo:{type:String,required:true},
    postedAt:{type:Date,required:true},
    createdAt:{type:Date,default:moment()},
    resumen:{type:String,required:true},
    fuente:{type:String,required:true},
    author:{type:String,required:true},
    image:{type:String},
    postedBy:{type:Schema.ObjectId,ref:'Usuario'},
    clasificacion:{type:Schema.ObjectId,ref:'Clasificacion'}
});

export default mongoose.model('Ficha',Ficha);
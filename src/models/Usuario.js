import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Usuario = new Schema({
    cedula:{type:String,required:true,unique:true},
    nombre:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phone:{type:String},
    role:{type:String,enum:['Avanzado','Intermedio','Básico','Viewer'],required:true},
    createdAt:{type:Date,default:Date.now()},
    lastLogin:{type:Date}
});

export default mongoose.model('Usuario',Usuario);
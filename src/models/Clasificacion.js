import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Clasificacion = new Schema({
    subClass:{type:String,required:true,unique:true},
    clasificacion:{type:String,required:true}
});

export default mongoose.model('Clasificacion',Clasificacion);
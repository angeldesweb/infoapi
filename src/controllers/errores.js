const formatErrors = (error)=>{
    console.log(error)
//IDENTIFICAMOS SI ES UN ERROR DE VALIDACIÓN DE MONGO
    if(error.name==='MongoError'){
        //OBTENEMOS EL PATH Y EL VALOR
        const keys = Object.keys(error.keyValue)
        const values = Object.values(error.keyValue)
        //DATOS DUPLICADOS
        if(error.code === 11000){
            return { 
                path:keys[0],
                message:`La información ingresada en el campo ${keys[0]} (${values[0]}) ya existe en la base de datos`
            }
        }
    }
}

export {
    formatErrors
}
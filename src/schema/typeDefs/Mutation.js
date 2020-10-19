const Mutation = `
    type Mutation {
        SignUp(cedula:String!,nombre:String!,email:String!,password:String!,phone:String,role:String!):UsuarioResponse!
        SignIn(cedula:String!,password:String):UsuarioResponse!
        createClasificacion(subClass:String!,clasificacion:String!):ClasificacionResponse!
        updateClasificacion(_id:ID!,subClass:String,clasificacion:String):ClasificacionResponse!
        deleteClasificacion(_id:ID!):ClasificacionResponse!
        createFicha(codigo:String!,titulo:String!,tipoInfo:String!,postedAt:String!,createdAt:String,resumen:String!,fuente:String!,image:String,author:String!,postedBy:String!,clasificacion:String!):FichaResponse!
        singleUpload(file:Upload!):File!
        updateFicha(_id:ID,codigo:String,titulo:String,tipoInfo:String,postedAt:String,createdAt:String,resumen:String,fuente:String,image:String,author:String,postedBy:String,clasificacion:String):FichaResponse!
        deleteFicha(_id:ID!):FichaResponse!
    }
`
export default Mutation
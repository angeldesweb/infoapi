const Query = `
    type Query {
        AllUsuarios:UsuarioResponse!
        getUsuarioById(_id:ID!):UsuarioResponse!
        allClasificaciones:ClasificacionResponse!
        getClasificacionById(_id:ID!):ClasificacionResponse!
        getClasificaciones(key:String!,value:String!):ClasificacionResponse!
        allFichas:FichaResponse!
        getFichaById(_id:ID!):FichaResponse!
        getFichas(key:String!,value:String!):FichaResponse!
    }

`
export default Query
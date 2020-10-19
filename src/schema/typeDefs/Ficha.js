export default `
scalar upload

type File {
    id:ID!
    url:String
}

type Ficha {
    _id:ID!
    codigo:String!
    titulo:String!
    tipoInfo:String!
    postedAt:String!
    createdAt:String!
    resumen:String!
    fuente:String!
    image:String
    author:String!
    postedBy:Usuario
    clasificacion:Clasificacion
}
type FichaResponse {
    status:String!
    success:Boolean!
    message:String!
    error:Error
    ficha:Ficha
    fichas:[Ficha]
}

`
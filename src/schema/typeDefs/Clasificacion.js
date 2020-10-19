export default `

    type Clasificacion {
        _id:ID!
        subClass:String!
        clasificacion:String!
    }
    type ClasificacionResponse {
        status:String!
        success:Boolean!
        message:String!
        error:Error
        clasificacion:Clasificacion
        clasificaciones:[Clasificacion]
    }

`
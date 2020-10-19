const Usuario = `

    type Usuario {
        _id:ID!
        cedula:String!
        nombre:String!
        email:String!
        password:String!
        phone:String
        role:String!
        createdAt:String
        lastLogin:String
    }

    type UsuarioResponse {
        success:Boolean!
        status:Int!
        message:String
        error:Error
        token:String
        usuario:Usuario
        usuarios:[Usuario]
    }
`

export default Usuario;
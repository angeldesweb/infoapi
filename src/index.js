import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import cors from 'cors';
import jwt from 'jwt-simple';
import typeDefs from './schema/typeDefs';
import resolvers from './schema/resolvers';
require('dotenv').config();

const port = process.env.PORT
const db = process.env.DB

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: async ({ req })=>{
        console.log(req.headers)
        const token = req.headers['x-token'] || '';
        console.log(token)
        if(token){
            const {user} = await jwt.decode(token,process.env.SECRET);
            console.log(user)
        }
        //return { user }
    }
});

const app = express();
app.use(cors());
server.applyMiddleware({ app });
 
app.listen({ port }, async () =>{
    try {
        await mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false})
        console.log(`Servicios activos: Server port: ${port} database: ${db}`);

    } catch (error) {
        console.log(error)
    }
});
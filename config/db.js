const { MongoClient, ServerApiVersion } = require('mongodb')
const dotenv = require('dotenv')
dotenv.config()

const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true
    }
});


async function connect() {
    try{
        await client.connect();
        console.log("Conectado a la Base de datos")
    }catch(e){
        console.error("Error al conectar a la base de datos: ", e)
    }
}

const getDb = () => {
    return client.db();
}

module.exports = {connect, getDb}
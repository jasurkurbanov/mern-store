const mongoose = require('mongoose')

const dbConnection = async () =>{
    try {
        const database = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${database.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = dbConnection

/*

crud fix 
deploy backend and fronted on internet

*/
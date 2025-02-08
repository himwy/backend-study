import mongoose from "mongoose";

export async function connect () {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;
        connection.on('conneced', () => {
            console.log('Connected to MongoDB')
        })

        connection.on('error', (err) => {
            console.log('Error connecting to MongoDB: ', err)
            process.exit()
        })


    }
    catch (err) {
        console.log('Something went wrong: ', err)
    }
}
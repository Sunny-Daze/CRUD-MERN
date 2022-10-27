import mongoose from 'mongoose'

const Connection = async (u,p) => {
    const URL = `mongodb+srv://${u}:${p}@crud-app.bedfe3i.mongodb.net/crud-app?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewURLParser: true });
        console.log("Database connected successfully");
    } catch(err) {
        console.log("Error while connecting to mongodb", err);
    }
}

export default Connection;
const mongoose = require("mongoose")

const connectDb = () => {
    mongoose.connect(process.env.DB_URL).then((con)=> {
        console.log("Mongoose Connected.." + con.connection.host)
    })
}

module.exports = connectDb;
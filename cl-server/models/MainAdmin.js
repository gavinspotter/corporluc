const mongoose = require("mongoose")

const Schema = mongoose.Schema

const mainAdminSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },

})


module.exports = mongoose.model("MainAdmin", mainAdminSchema)
import mongoose from "mongoose";

let firstSchema = new mongoose.Schema({
    message_id: { type: String, unique: true, require: true },
    message: { type: String }
})

let Message = mongoose.model("Message", firstSchema)

export default Message;
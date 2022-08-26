import mongoose from "mongoose";

let firstSchema = new mongoose.Schema({
    message_id: { type: String, unique: true, required: true },
    message: { type: String, default: "No Message" },
    username: { type: String, required: true }
})

let Message = mongoose.model("Message", firstSchema)

export default Message;
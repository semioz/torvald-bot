import {Schema,model} from "mongoose";

interface messageType {
    message_id: string,
    message:string,
    username:string,
    date:Date                                                
}

let firstSchema = new Schema<messageType>({
    message_id: { type: String, unique: true, required: true },
    message: { type: String, default: "No Message" },
    username: { type: String, required: true },
    date: { type: Date }
})

let Message = model<messageType>("Message", firstSchema)

export default Message;
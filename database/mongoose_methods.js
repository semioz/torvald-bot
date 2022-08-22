import Message from "./message_schema.js";

export const fetch = async(message_id) => {
    let message_db = await Message.findOne({ message_id: message_id })

    if (message_db) return message_db
    else {
        message_db = new Message({ message_id: message_id })
        await message_db.save()
        return message_db
    }
}

export const update = async(message_id, update_id) => {
    console.log(await Message.updateOne({ message_id }, update_id))
}
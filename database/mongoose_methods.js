import Message from "./message_schema.js";

export const fetch = async(message_id, message, username, date) => {
    let message_db = await Message.findOne({ message_id })

    if (message_db) return message_db
    else {
        message_db = new Message({ message_id, message, username, date })
        await message_db.save()
        return message_db
    }
};

export const redisDb = async(username, message_id) => {
    let message_db = await Message.findOne({ username });

    if (message_db) return message_db
    else {
        message_db = new Message({ username })
    }
}

export const fetchAll = async(filter = {}) => {
    const message_db = await Message.find(filter)
    return message_db
}

//Update the object
export const update = async(message_id, update_id) => {
    await Message.updateOne({ message_id }, update_id, { upsert: true })
}

//Delete an object
export const deleteObj = async(message_id) => {
    await Message.deleteOne({ message_id })
}
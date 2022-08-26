import { v4 as uuidv4 } from "uuid";

export default {
    name: "fback",
    description: "Give feedback to the developer of Torvald Bot",
    async execute(msg) {
        let value = msg.content.slice(7)
        await msg.client.database.fetch(uuidv4(), value, msg.author)
        await msg.channel.send(`${msg.author} Thank you for the feedback. My developer will work on it.`)
    }
};
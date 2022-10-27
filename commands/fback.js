import { v4 as uuidv4 } from "uuid";
import redis from "redis";
const client = redis.createClient(process.env.REDIS_URL)
import util from "util";

export default {
    name: "fback",
    description: "Give feedback to the developer of Torvald Bot",
    async execute(msg) {
        let value = msg.content.slice(7)
        await msg.client.database.fetch(uuidv4(), value, msg.author, new Date().toJSON().slice(0, 10).replace(/-/g, '/'))
        await msg.channel.send(`Thank you for the feedback ${msg.author}. My developer will work on it.`)
    }
};
import redis from "redis";
const redisClient = redis.createClient(process.env.REDIS_URL)
await redisClient.connect();

//TODO: SEND ALL THE MESSAGES OF USER.

export default {
    name: "get",
    description: "Get the message from the database via Redis or MongoDB",
    async execute(msg) {
        let value = msg.content.slice(5)
        const cachedMessages = await redisClient.get(value)
        if (cachedMessages) {
            console.log("Serving from cache!")
            return msg.reply(JSON.parse(cachedMessages))
        }
        let message = await msg.client.database.fetch(value)
        await console.log("Serving from MongoDB!")

        await msg.reply(message["message"])

        redisClient.set(value, JSON.stringify(message["message"]))
    }
};
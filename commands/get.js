import redis from "redis";
const redisClient = redis.createClient({
    url: process.env.REDIS_URL
});

redisClient.on("connect", () => console.log("Redis Connection Is Successful"));
redisClient.on("error", (err) => console.log("Redis Client Error:", err));
await redisClient.connect();

//CREATED THIS COMMAND TO TEST REDIS

export default {
    name: "get",
    description: "Get the message from the database via Redis or MongoDB",
    async execute(msg) {
        let firstTime = Date.now();
        let value = msg.content.slice(5)
        let hashKey = "Messages";

        const cachedMessages = await redisClient.hGet(hashKey, value);
        if (cachedMessages) {
            console.log("Serving from cache!")
            return msg.reply(`Speed:${Date.now()-firstTime} ${JSON.parse(cachedMessages)}`)
        }
        let message = await msg.client.database.fetch(value)
        console.log("Serving from MongoDB!")
        await msg.reply(`Speed: ${Date.now()-firstTime} ${message["message"]}`)

        redisClient.hSet(hashKey, value, JSON.stringify(message["message"]))
            //After 10 seconds, value expires and redis removes it from the cache.
        redisClient.expire(hashKey, 7200)
    }
};
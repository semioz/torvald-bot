import dotenv from "dotenv";
import { readdirSync } from "fs";
dotenv.config();
import mongoose from "mongoose";
import Discord, { Collection } from "discord.js";
import stayinAlive from "./server.js";
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

//MongoDB Connection
await mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Torvald Bot Successfully Connected to MongoDB")
    })
    .catch(err => console.log("Failed to Connect to MongoDB"))

//Event Loader
readdirSync("./events").forEach(async file => {
    const event = await
    import (`./events/${file}`).then(e => e.default)
    event(client)
})

//Command Loader
client.commands = new Collection()
readdirSync("./commands").forEach(async file => {
    const command = await
    import (`./commands/${file}`).then(c => c.default);
    client.commands.set(command.name, command);
});

stayinAlive()
client.login(process.env.TOKEN);
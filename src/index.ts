import dotenv from "dotenv";
import { readdirSync } from "fs";
dotenv.config();
import * as database from "./database/mongoose_methods.js";
import mongoose from "mongoose";
import Discord, { Collection } from "discord.js";
import stayinAlive from "./server";
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

//MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database Connection Is Successful")
    })
    .catch(err => console.log(err))

//Event Loader
readdirSync(__dirname+ "/events").forEach(async file => {
    const event = await
    import (`./events/${file}`).then(e => e.default)
    event(client)
});

//Command Loader
client.commands = new Collection()
readdirSync(__dirname+"/commands").forEach(async file => {
    const command = await
    import (`./commands/${file}`).then(c => c.default);
    client.commands.set(command.name, command);
});
//MongoDB Methods
client.database = database

stayinAlive()
client.login(process.env.TOKEN);
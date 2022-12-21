import { CommandType } from './../interfaces/Command';
import {ClientType} from "./../interfaces/Client";
import { v4 as uuidv4 } from "uuid";

export default {
    name: "fback",
    description: "Give feedback to the developer of Torvald Bot",
    //client type'ı cagirirsam bu sefer channel, author tiplerini de istiyor
    //bunu cozmek lazim
    async execute(msg:CommandType) {
        let value = msg.content.slice(7)
        await msg.client.database.fetch(uuidv4(), value, msg.author, new Date().toJSON().slice(0, 10).replace(/-/g, '/'))
        await msg.channel.send(`Thank you for the feedback ${msg.author}. My developer will work on it.`)
    }
};
import { MessageEmbed } from "discord.js";
import bitcoin from "./bitcoin.js";
import pomodoro from "./pomodoro.js";
import fback from "./fback.js";
import inspire from "./inspire.js";
import meme from "./meme.js";
import github from "./github.js";
import weather from "./weather.js";
import translate from "./translate.js";
import ping from "./ping.js"
import reddit from "./reddit.js"

export default {
    name: "info",
    description: "Learn more about Torvald Bot",
    execute(msg) {
        const infoEmbed = new MessageEmbed()
            .setColor('#143F6B')
            .setTitle("Commands")
            .setURL('https://github.com/semihberkayozturk/Torvald-Bot')
            .setAuthor({ name: "GitHub", url: 'https://github.com/semihberkayozturk/Torvald-Bot' })
            .addFields({ name: '● $info', value: this.description }, { name: '● $inspire', value: inspire.description }, { name: '● $pomodoro', value: pomodoro.description }, { name: '● $translate <text>', value: translate.description }, { name: '● $bitcoin', value: bitcoin.description }, { name: '● $meme', value: meme.description }, { name: '● $ping', value: ping.description }, { name: '● $reddit <subreddit name>', value: reddit.description }, { name: '● $github <username>', value: github.description }, { name: '● $weather <city name>', value: weather.description }, { name: '● $fback <your message>', value: fback.description })
        msg.channel.send({ embeds: [infoEmbed] });
    }
};
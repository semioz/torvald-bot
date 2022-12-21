import { MessageEmbed } from "discord.js";
import { CommandType } from "../interfaces/Command";
import bitcoin from "./bitcoin";
import weather from "./weather";
import inspire from "./inspire";
import fback from "./fback";
import meme from "./meme";
import reddit from "./reddit";
import pomodoro from "./pomodoro";
import ping from "./ping";
import github from "./github";
import translate from "./translate";


export default{
    name: "info",
    description: "Learn more about Torvald Bot",
    execute(msg:CommandType) {
        const infoEmbed = new MessageEmbed()
            .setColor('#143F6B')
            .setTitle("Commands")
            .setURL('https://github.com/semihberkayozturk/Torvald-Bot')
            .setAuthor({ name: "GitHub", url: 'https://github.com/semihberkayozturk/Torvald-Bot' })
            .addFields({ name: '● $info', value: this.description }, { name: '● $inspire', value: inspire.description }, { name: '● $pomodoro', value: pomodoro.description }, { name: '● $translate <text>', value: translate.description }, { name: '● $bitcoin', value: bitcoin.description }, { name: '● $meme', value: meme.description }, { name: '● $ping', value: ping.description }, { name: '● $reddit <subreddit name>', value: reddit.description }, { name: '● $github <username>', value: github.description }, { name: '● $weather <city name>', value: weather.description }, { name: '● $fback <your message>', value: fback.description })
        msg.channel.send({ embeds: [infoEmbed] });
    }
};
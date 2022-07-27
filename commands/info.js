import { MessageEmbed } from "discord.js";

export default {
    name: "info",
    execute(msg) {
        const infoEmbed = new MessageEmbed()
            .setColor('#143F6B')
            .setTitle("Commands")
            .setURL('https://github.com/semihberkayozturk/Torvald-Bot')
            .setAuthor({ name: "GitHub", url: 'https://github.com/semihberkayozturk/Torvald-Bot' })
            .addFields({ name: '● $info', value: 'Learn more details about Torvald Bot.' }, { name: '● $inspire', value: "Torvald Bot sends inspirational quotes  from the world's most important philosiphers, inventors, scientists, religious figures, and leaders throughout history." }, { name: '● $guess <value>', value: 'Try to guess the number which is between 1 and 10' }, { name: '● $pomodoro', value: "Torvald Bot starts a 25 minutes long Pomodoro session and sends you a message when it's finished." }, { name: '● $translate <text>', value: "With this command, Torvald Bot detects the language you've written and translates it to English." }, { name: '● $bitcoin', value: "Current price of Bitcoin." }, { name: '● $meme', value: "Torvald Bot shows programming memes." }, { name: '● $ping', value: "Ping stats of Discord and Torvald Bot." }, { name: '● $reddit <subreddit name>', value: "Random posts from a subreddit you've chosen." }, { name: '● $github <username>', value: "An overview of GitHub account you've chosen." }, { name: '● $weather <city name>', value: "Weather information of given city." })
        msg.channel.send({ embeds: [infoEmbed] });
    }
};
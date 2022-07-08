import dotenv from "dotenv";
dotenv.config();
import Discord from "discord.js";
import fetch from 'node-fetch';
import stayinAlive from "./server.js";
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
import translate from "@iamtraction/google-translate";
import { MessageEmbed } from "discord.js";
import { meme } from "memejs";
import getQuote from "./commands/quote.js";
import getBtc from "./commands/btc.js";

const prefix = "$";

const infoEmbed = new MessageEmbed()
    .setColor('#143F6B')
    .setTitle('Commands')
    .setURL('https://github.com/semihberkayozturk/Torvald-Bot')
    .setAuthor({ name: 'Torvald Bot', url: 'https://discord.js.org' })
    .addFields({ name: '● $info', value: 'dene more details about Torvald Bot.' }, { name: '● $inspire', value: "Torvald Bot sends inspirational quotes  from the world's most important philosiphers, inventors, scientists, religious figures, and leaders throughout history." }, { name: '● $creator', value: 'Social media accounts of the creator of Torvald Bot.' }, { name: '● $guess <value>', value: 'Try to guess the number which is between 1 and 10' }, { name: '● $pomodoro', value: "Torvald Bot starts a 25 minutes long Pomodoro session and sends you a message when it's finished." }, { name: '● $translate <text>', value: "With this command, Torvald Bot detects the language you've written and translates it to English." }, { name: '● $bitcoin', value: "Current price of Bitcoin." }, { name: '● $meme', value: "Torvald Bot shows programming memes." }, { name: '● $repo', value: "See the repository of Torvald Bot on GitHub." }, { name: '● $reddit <subreddit name>', value: "Random posts from a reddit subreddit you've chosen except NSFW posts." })

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", msg => {

    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //Inspire
    if (command === "inspire") {
        getQuote().then(quote => msg.channel.send(quote))
    };

    //Info
    if (command === "info") {
        msg.channel.send({ embeds: [infoEmbed] })
    };

    //Bitcoin
    if (command === "bitcoin") {
        getBtc().then(btc => msg.reply(`Current price of Bitcoin is ${String(btc)} Dollars.`))
    };

    //Reddit
    if (command.startsWith("$reddit")) {
        let subreddit = msg.content.split("$reddit ")[1]
        meme(subreddit)
            .then(data => {
                const redditEmbed = new MessageEmbed()
                    .setColor("#143F6B")
                    .setTitle(data.title)
                    .setImage(data.url)
                    .setTimestamp();
                msg.channel.send({ embeds: [redditEmbed] })

            }) //Error Handling
            .catch(e => msg.reply("For some reason, I'm unable to find the post. Would you like to give it a try one more time ?"));
    };

    //Memes
    if (command === "meme") {
        meme("ProgrammerHumor").then(data => {
                const memesEmbed = new MessageEmbed()
                    .setColor("#143F6B")
                    .setTitle(data.title)
                    .setImage(data.url)
                    .setTimestamp()
                msg.channel.send({ embeds: [memesEmbed] })
            }) //Error Handling
            .catch(err => msg.reply("I can't find any memes right now. Please try again."));
    };
    //Creator
    if (command === "creator") {
        msg.channel.send("Well, obviously I do have a creator. Check out his accounts and feel free to contact him.\nLinkedIn-->https://www.linkedin.com/in/semihberkayozturk//\nGitHub-->https://github.com/semihberkayozturk")
    };

    //Pomodoro
    if (command === "pomodoro") {
        msg.channel.send("25 minutes Pomodoro has started !")

        function sleep(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        }
        sleep(1500000).then(() => {
            msg.channel.send(`Time is up ${msg.author} !!!`)
        });
    }

    //Guess
    if (msg.content.startsWith("$guess")) {
        let selectedNumber = Math.floor(Math.random() * 10) + 1;
        let response = msg.content.split("$guess ")[1]
        if (response == selectedNumber) {
            msg.channel.send(`Congrats ${msg.author} ! You've selected the correct number.`)
        } else {
            msg.channel.send("Ooops ! You couldn't the find the correct number ❌ It was " + selectedNumber)
        };
    };

    //GitHub

    if (command === "repo") {
        msg.channel.send("Check out the GitHub repository of Torvald Bot --> https://github.com/semihberkayozturk/Torvald-Bot\n\nNote: Do not forget to give it a star.");
    };

    //Translation
    if (msg.content.startsWith("$translate")) {
        let word = msg.content.split("$translate ")[1]
        translate(word, { to: "en" }).then(res => {
            msg.reply(res.text);
        }).catch(err => {
            console.error(err);
        });
    };

});

stayinAlive()
client.login(process.env.TOKEN);
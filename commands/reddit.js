import { meme } from "memejs";
import { MessageEmbed } from "discord.js";

export default {
    name: "reddit",
    execute(msg) {
        let value = msg.content.slice((process.env.PREFIX).length).trim().split(/ +/);
        let subreddit = value[1]
        meme(subreddit).then(data => {
                const postEmbed = new MessageEmbed()
                    .setColor("#143F6B")
                    .setTitle(data.title)
                    .setImage(data.url)
                    .setTimestamp()
                msg.channel.send({ embeds: [postEmbed] })
            }) //Error Handling
            .catch(err => msg.reply("I can't find a post from that subreddit right now. Please try again."));
    }
};
import { meme } from "memejs";
import { MessageEmbed } from "discord.js";

export default {
    name: "reddit",
    execute(msg) {
        meme("ProgrammerHumor").then(data => {
                const memesEmbed = new MessageEmbed()
                    .setColor("#143F6B")
                    .setTitle(data.title)
                    .setImage(data.url)
                    .setTimestamp()
                msg.channel.send({ embeds: [memesEmbed] })
            }) //Error Handling
            .catch(err => msg.reply("I can't find any memes right now. Please try again."));
    }
};
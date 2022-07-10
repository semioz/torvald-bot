import { MessageEmbed } from "discord.js";

export default {
    name: "ping",
    execute(msg) {
        const ping_discord = msg.client.ws.ping
        const ping_bot = Date.now() - msg.createdTimestamp

        const infoEmbed = new MessageEmbed()
            .setColor('#143F6B')
            .setTitle('Ping Details')
            .addFields({ name: "● Discord Ping", value: ping_discord.toString() }, { name: "● Bot Ping", value: ping_bot.toString() })
        msg.reply({ embeds:  [infoEmbed] })
    }
};
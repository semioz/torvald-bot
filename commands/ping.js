import { MessageEmbed } from "discord.js";

export default {
    name: "ping",
    description: "Ping stats of Torvald Bot and Discord",
    execute(msg) {
        let ping_discord = msg.client.ws.ping
        let ping_bot = Date.now() - msg.createdTimestamp

        const infoEmbed = new MessageEmbed()
            .setColor('#143F6B')
            .setTitle('Ping Details')
            .addFields({ name: "● Discord Ping", value: ping_discord.toString() }, { name: "● Bot Ping", value: ping_bot.toString() })
        msg.reply({ embeds:  [infoEmbed] })
    }
};
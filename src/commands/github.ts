import fetch from 'node-fetch';
import { MessageEmbed } from "discord.js";
import { CommandType } from '../interfaces/Command';

export default {
    name: "github",
    description: "An overview of a GitHub account you've chosen.",
    execute(msg:CommandType) {
        let values = (msg.content.slice((process.env.PREFIX).length).trim().split(/ +/))[1];
        return fetch(`https://api.github.com/users/${values}`)
            .then(res => {
                return res.json()
            })
            .then((data:any) => {
                if (data["company"] === null) {
                    data["company"] = "No Information Found❌"
                }
                if (data["bio"] === null) {
                    data["bio"] = ""
                }
                if (data["name"] === null) {
                    data["name"] = ""
                }
                const accountEmbed = new MessageEmbed()
                    .setColor('#143F6B')
                    .setTitle(data["name"])
                    .setThumbnail(data["avatar_url"])
                    .setDescription(data["bio"])
                    .addFields({ name: "● Followers", value: data["followers"].toString(), }, { name: "● Following", value: data["following"].toString() }, { name: "● Creation Date", value: data["created_at"].slice(0, 10) }, { name: "● Public Repositories", value: data["public_repos"].toString() }, { name: "● Public Gists", value: data["public_gists"].toString() }, { name: "● Company", value: data["company"] })
                    .setTimestamp()
                    .setURL(`https://github.com/${values}`)
                msg.reply({ embeds: [accountEmbed] });
            })
            .catch(err => msg.reply("User doesn't exist on GitHub"));
    }
};
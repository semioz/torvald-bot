import fetch, { AbortError } from 'node-fetch';
import { MessageEmbed } from "discord.js";

export default {
    name: "weather",
    execute(msg) {
        let element = (msg.content.slice((process.env.PREFIX).length).trim().split(/ +/));
        let city = element.slice(1, element.length - 1).join(' ') + " " + element.slice(-1)
        return fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + process.env.API_KEY + "&units=metric")
            .then(res => {
                return res.json()
            })
            .then(data => {
                const weatherEmbed = new MessageEmbed()
                    .setColor('#143F6B')
                    .setTitle(city.toUpperCase())
                    .setThumbnail(`http://openweathermap.org/img/wn/` + data["weather"][0].icon + `@2x.png`)
                    .setDescription(data["sys"].country)
                    .addFields({ name: `● Weather`, value: (data["weather"][0].main).toString() }, { name: `● Celcius`, value: Math.round(data["main"].feels_like).toString() })
                    .setTimestamp()
                msg.reply({ embeds: [weatherEmbed] });
            })
            .catch(err => msg.reply("For some reason, I'm unable to reach the weather data. Please try later."))
    }
}
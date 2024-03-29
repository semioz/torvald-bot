import fetch from 'node-fetch';
import { MessageEmbed } from "discord.js";

export default {
    name: "weather",
    description: "Weather information of selected city.",
    execute(msg) {
        let city = msg.content.slice(9);
        if (!city) return msg.reply("Please insert a city name!");
        return fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + process.env.API_KEY + "&units=metric")
            .then(res => {
                return res.json()
            })
            .then((data:any) => {
                const weatherEmbed = new MessageEmbed()
                    .setColor('#143F6B')
                    .setTitle(city.toUpperCase())
                    .setThumbnail(`http://openweathermap.org/img/wn/` + data["weather"][0].icon + `@2x.png`)
                    .setDescription(data["sys"].country)
                    .addFields({ name: `● Weather`, value: (data["weather"][0].main).toString() }, { name: `● Celcius`, value: Math.round(data["main"].feels_like).toString() })
                    .setTimestamp()
                msg.reply({ embeds: [weatherEmbed] });
            })
            .catch(err => msg.reply("For some reason, I'm unable to reach the weather data. Please try later."));
    }
};
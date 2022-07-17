import fetch from "node-fetch";

export default {
    name: "inspire",
    execute(msg) {
        return fetch("https://zenquotes.io/api/random")
            .then(res => {
                return res.json()
            })
            .then(data => {
                return data[0]["q"] + " -" + data[0]["a"]
            })
            .then(quote => msg.reply(quote));
    }
};
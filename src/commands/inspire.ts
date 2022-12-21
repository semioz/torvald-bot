import fetch from "node-fetch";

export default {
    name: "inspire",
    description: "Torvald Bot sends inspirational quotes  from the world's most important philosiphers, inventors, scientists, religious figures, and leaders throughout history.",
    execute(msg) {
        return fetch("https://zenquotes.io/api/random")
            .then(res => {
                return res.json()
            })
            .then((data:any) => {
                return data[0]["q"] + " -" + data[0]["a"]
            })
            .then(quote => msg.reply(quote));
    }
};
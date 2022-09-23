import fetch from 'node-fetch';

export default {
    name: "bitcoin",
    description: "Current price of Bitcoin.",
    execute(msg) {
        return fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(res => {
                return res.json()
            })
            .then(data => {
                return data["bpi"]["USD"]["rate"]
            })
            .then(btc => msg.reply(`Current price of Bitcoin is ${String(btc)} Dollars.`));
    }
};
import fetch from 'node-fetch';
import { CommandType } from '../interfaces/Command';

export default {
    name: "bitcoin",
    description: "Current price of Bitcoin.",
    execute(msg:CommandType) {
        return fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(res => {
                return res.json()
            })
            .then((data:any) => {
                return data["bpi"]["USD"]["rate"]
            })
            .then((btc:Number) => msg.reply(`Current price of Bitcoin is ${String(btc)} Dollars.`));
    }
};
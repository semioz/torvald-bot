import fetch from 'node-fetch';

function getBtc() {
    return fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(res => {
            return res.json()
        })
        .then(data => {
            return data["bpi"]["USD"]["rate"]
        });
}

export default getBtc;
import translate from "@iamtraction/google-translate";
export default {
    name: "translate",
    execute(msg) {
        const args = msg.content.slice((process.env.PREFIX).length).trim().split(/ +/);
        let element = args.slice(1, args.length - 1).join(' ') + " " + args.slice(-1);
        translate(element, { to: "en" }).then(res => {
            msg.reply(res.text);
        }).catch(err => {
            console.error(err);
        })
    }
};
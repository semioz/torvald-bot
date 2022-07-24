export default {
    name: "guess",
    execute(msg) {
        let selectedNumber = Math.floor(Math.random() * 10) + 1;
        let response = msg.content.slice((process.env.PREFIX).length).trim().split(/ +/);
        if (Number(response[1]) == selectedNumber) {
            msg.reply(`Congrats ${msg.author} ! You've selected the correct number.`);
        } else  {
            msg.reply("Ooops ! You couldn't the find the correct number ❌ It was " + selectedNumber)

        }
    }
};
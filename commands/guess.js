export default {
    name: "guess",
    execute(msg) {
        let selectedNumber = Math.floor(Math.random() * 10) + 1;
        let response = msg.content.slice((process.env.PREFIX).length).trim().split(/ +/);
        if (response[1] == selectedNumber) {
            msg.channel.send(`Congrats ${msg.author} ! You've selected the correct number.`);
        } else  {
            msg.channel.send("Ooops ! You couldn't the find the correct number ❌ It was " + selectedNumber)
        }
    }
};
const prefix = "$"
export default {
    name: "guess",
    execute(msg) {
        let selectedNumber = Math.floor(Math.random() * 10) + 1;
        let response = msg.content.slice(prefix.length).trim().split(/ +/);
        if (response == selectedNumber) {
            msg.channel.send(`Congrats ${msg.author} ! You've selected the correct number.`);
        } else  {
            msg.channel.send("Ooops ! You couldn't the find the correct number ❌ It was " + selectedNumber)
        }
    }
};
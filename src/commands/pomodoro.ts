export default {
    name: "pomodoro",
    description: "Torvald Bot starts a 25 minutes long Pomodoro session and sends you a message when it's finished.",
    execute(msg) {
        msg.reply("25 minutes Pomodoro has started!")

        function sleep(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        }
        sleep(1500000).then(() => {
            msg.author.send(`Time is up ${msg.author} !!!`)
        })
    }
};
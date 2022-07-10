export default {
    name: "pomodoro",
    execute(msg) {
        msg.channel.send("25 minutes Pomodoro has started !")

        function sleep(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        }
        sleep(1500000).then(() => {
            msg.channel.send(`Time is up ${msg.author} !!!`)
        })
    }
};
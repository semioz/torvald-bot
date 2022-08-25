export default {
    name: "fback",
    description: "Give feedback to the developer of Torvald Bot",
    async execute(msg) {
        let value = msg.content.slice(7)
        await msg.client.database.fetch((Math.floor(Math.random() * 2147483647)).toString(), value)
        await msg.channel.send(`Thanks for the feedback. My developer will work on it ${msg.author}`)
    }
};
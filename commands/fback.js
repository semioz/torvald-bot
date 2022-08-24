export default {
    name: "fback",
    description: "Give feedback to the developer of Torvald Bot",
    async execute(msg) {
        let fb = msg.content.slice((process.env.PREFIX).length).trim().split(/ +/)
        let value = fb.slice(1, fb.length - 1).join(' ') + " " + fb.slice(-1)
        await msg.client.database.fetch("1234567890")
    }
};
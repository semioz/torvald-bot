import { fetch, update } from "../database/mongoose_methods.js"

export default client => {
    client.on("ready", async() => {
        //console.log(await fetch("123"))
        await update("345", { $set: { message_id: "567" } })
        console.log(`Number of servers using Torvald Bot: ${client.guilds.cache.size}`)
        client.user.setActivity("Discord")
        console.log(`Logged in as ${client.user.tag}!`)
    })
};
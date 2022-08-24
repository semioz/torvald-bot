export default client => {
    client.on("ready", async() => {
        console.log(`Number of servers using Torvald Bot: ${client.guilds.cache.size}`)
        client.user.setActivity("Discord")
        console.log(`Logged in as ${client.user.tag}!`)
    })
};
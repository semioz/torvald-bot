export default client => {
    client.on("ready", async() => {
        console.log(`Number of Servers Using Torvald Bot: ${client.guilds.cache.size}`)
        client.user.setActivity("Discord")
        console.log(`Logged in as ${client.user.tag}!`)
    })
};
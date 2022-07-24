export default client => {
    client.on("ready", () => {
        let stats = `Number of servers using Torvald Bot: ${client.guilds.cache.size}`;
        console.log(stats)
        client.user.setActivity("Discord")
        console.log(`Logged in as ${client.user.tag}!`)
    })
};
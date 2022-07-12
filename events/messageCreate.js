export default client => {
    const prefix = "$"

    client.on("messageCreate", msg => {

        if (!msg.content.startsWith(prefix) || msg.author.bot) return;
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        const commandName = client.commands.get(command)

        if (!commandName) return;
        try {
            commandName.execute(msg);
        } catch (e) {
            console.error(e)
            msg.reply("Commant not found");
        }

    })
};
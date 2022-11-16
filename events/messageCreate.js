export default client => {

    client.on("messageCreate", msg => {

        if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;
        const args = msg.content.slice((process.env.PREFIX).length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        const commandName = client.commands.get(command)

        if (!commandName) return msg.reply("Command not found! Type '$info' to see the commands.");
        try {
            commandName.execute(msg);
        } catch (e) {
            console.error(e)
            msg.reply("Command not found1!");
        }
    })
};
import express from "express";

const server = express();

server.all("/", (req, res) => {
    res.send("Bot is up and running.");
})

function stayinAlive() {
    app.listen(process.env.PORT || 3000, function() {
        console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    })
}

export default stayinAlive;
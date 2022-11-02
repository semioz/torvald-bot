import express from "express";
const server = express();

server.all("/", (req, res) => {
    res.send("Torvald Bot is up and running.");
})

function stayinAlive() {
    server.listen(process.env.PORT || 3000, function() {
        console.log("Express server listening on port %d in %s mode", this.address().port, server.settings.env);
    })
}

export default stayinAlive;
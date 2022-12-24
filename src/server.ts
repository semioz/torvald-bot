import express,{Request, Response} from "express";
import mongoSanitize from "express-mongo-sanitize";
const server = express();

server.use(mongoSanitize())

server.all("/", (req:Request, res:Response) => {
    res.send("Torvald Bot is up and running on this server.");
});

function stayinAlive() {
    server.listen(process.env.PORT || 3000, function() {
        console.log("Express server listening on port %d in %s mode", this.address().port, server.settings.env);
    })
}

export default stayinAlive;
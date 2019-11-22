const Eris = require("eris");
var prefix = "!";
var bot = new Eris("NjQ3MzgzMjgyOTQ1NzUzMDkx.Xde5CA.atvajS5fxYMu9M4xZnA1ipbbpuI");
bot.on("ready", () => {
    console.log("Ready!");
});
bot.on("messageCreate", (msg) => {
    switch(msg.content){
        case prefix + "ping":
                
        bot.createMessage(msg.channel.id, "Envois ton 06 !");

            break;
    }
    if(msg.content === "!ip") {
        bot.createMessage(msg.channel.id, "Tu dois effectuer un ip check via ton panel joueur !");
        
    }
});
bot.connect();
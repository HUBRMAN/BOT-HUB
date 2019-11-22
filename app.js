const Eris = require("eris");
var prefix = "!";
var bot = new Eris("NjQ3MzgzMjgyOTQ1NzUzMDkx.Xde5CA.atvajS5fxYMu9M4xZnA1ipbbpuI");
bot.on("ready", () => {
    console.log("Je suis prêt !");
});
bot.on("messageCreate", (msg) => {
    switch(msg.content){
        case prefix + "ip":
                const data = {
                    "content": "this `supports` __a__ **subset** *of* ~~markdown~~ 😃 ```js\nfunction foo(bar) {\n  console.log(bar);\n}\n\nfoo(1);```",
                    "embed": {
                      "title": "title ~~(did you know you can have markdown here too?)~~",
                      "description": "this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```",
                      "url": "https://discordapp.com",
                      "color": 11676803,
                      "timestamp": "2019-11-22T14:08:48.582Z",
                      "footer": {
                        "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
                        "text": "footer text"
                      },
                      "thumbnail": {
                        "url": "https://cdn.discordapp.com/embed/avatars/0.png"
                      },
                      "image": {
                        "url": "https://cdn.discordapp.com/embed/avatars/0.png"
                      },
                      "author": {
                        "name": "author name",
                        "url": "https://discordapp.com",
                        "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
                      },
                      "fields": [
                        {
                          "name": "🤔",
                          "value": "some of these properties have certain limits..."
                        },
                        {
                          "name": "😱",
                          "value": "try exceeding some of them!"
                        },
                        {
                          "name": "🙄",
                          "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
                        },
                        {
                          "name": "<:thonkang:219069250692841473>",
                          "value": "these last two",
                          "inline": true
                        },
                        {
                          "name": "<:thonkang:219069250692841473>",
                          "value": "are inline fields",
                          "inline": true
                        }
                      ]
                    }
                  };
                  client.createMessage(channelID, data);
        break;
    }
    if(msg.content === "!ip") {
        bot.createMessage(msg.channel.id, "Tu dois effectuer un ip check via ton panel joueur !");
        
    }
});
bot.connect();
const Eris = require("eris");
const Embed_Builder = require("eris_embed_builder");
const prefix = "!";
var bot = new Eris("NjQ3MzgzMjgyOTQ1NzUzMDkx.XdftgQ.0YGoOlyGPOJkn1pAqPd7BhhNHOQ");
bot.on("ready", () => {
    console.log("Je suis prêt et opérationnel !");
});
bot.on("messageCreate", (msg) => {
    switch(msg.content){
        case prefix + "ip":
                const data = {
                    "embed": {
                      "title": "Problème de connexion au serveur !",
                      "description": "Je suis BOT HUB, et je suis là pour t'aider à résoudre ton problème 😃 \n \n \n",
                      "url": "https://discordapp.com",
                      "color": 4886754,
                      "footer": {
                        "icon_url": "https://yt3.ggpht.com/a/AGF-l79CpWCFUqmlrCeWtYdy6l4MqJvWllNEDsbtPg=s900-c-k-c0xffffffff-no-rj-mo",
                        "text": "copyright AdastraGaming"
                      },
                      "thumbnail": {
                        "url": "https://image.noelshack.com/fichiers/2019/47/5/1574430989-67600674-521441015329765-5369664045848723456-n.png"
                      },
                      "image": {
                        "url": "https://nicolasmariuzza.com/assets/splash_1plan-de-travail-8.jpg"
                      },
                      "fields": [
                        {
                          "name": "Tu as des difficultés à te connecter sur nos serveurs ? 🤔",
                          "value": "Je peux te conseiller de vérifier ton ip sur le [pannel](https://account.gtav.adastragaming.fr/login) ! \n \n \n"
                        },
                        {
                          "name": "Tu as déjà fait un IP check sur le pannel ? 😱",
                          "value": "N'oublies pas que nous avons changé de MP, \nnous sommes maintenant sur [ALTV](https://altv.mp/#/) !\nPour te connecter c'est très simple, voici l'adresse \n ```connect.adastragaming.fr:80```"
                        },
                        {
                          "name": "🙄",
                          "value": " **Si ton problème persiste, n'hésite pas à contacter un @support ! "
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
                  bot.createMessage(msg.channel.id, data);
        break;
    }
    if(msg.content === "!ip") {
        bot.createMessage(msg.channel.id, "Tu dois effectuer un ip check via ton panel joueur !");
        
    }
});
bot.connect();
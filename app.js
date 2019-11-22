const Eris = require("eris");
const prefix = "!";
var bot = new Eris("NjQ3MzgzMjgyOTQ1NzUzMDkx.XdhDgA.EcJSND1fW6eVvVoCpdFJsCP8gAE");
bot.on("ready", () => {
    console.log("Je suis prêt et opérationnel !");
});
bot.on("messageCreate", (msg) => {
    switch(msg.content){
        case prefix + "ip":
                const data = {
                    "embed": {
                      "title": "Problème de connexion au serveur !",
                      "description": "Je suis le BOT support d'Adastra et je suis là pour t'aider à résoudre ton problème 😃 \n \n \n",
                      "url": "https://discordapp.com",
                      "color": 4886754,
                      "footer": {
                        "icon_url": "https://yt3.ggpht.com/a/AGF-l79CpWCFUqmlrCeWtYdy6l4MqJvWllNEDsbtPg=s900-c-k-c0xffffffff-no-rj-mo",
                        "text": "by AdastraGaming"
                      },
                      "thumbnail": {
                        "url": "https://image.noelshack.com/fichiers/2019/47/5/1574430989-67600674-521441015329765-5369664045848723456-n.png"
                      },
                      "image": {
                        "url": "https://image.noelshack.com/fichiers/2019/47/5/1574439735-annotation-2019-11-22-172144.png"
                      },
                      "fields": [
                        {
                          "name": "Tu as des difficultés à te connecter sur nos serveurs ? 🤔",
                          "value": "Je peux te conseiller de vérifier ton ip sur le [pannel](https://account.gtav.adastragaming.fr/login) ! \n \n \n"
                        },
                        {
                          "name": "Tu as déjà fait un IP check sur le pannel ? 😱",
                          "value": "\nN'oublies pas que nous avons changé de MP, \nnous sommes maintenant sur [ALTV](https://altv.mp/#/) !\nPour te connecter c'est très simple, voici l'adresse \n ```connect.adastragaming.fr:80```"
                        },
                        {
                          "name": "🙄",
                          "value": "Si ton problème persiste, n'hésite pas à contacter un @support ! "
                        },
                      ]
                    }
                  };
                  bot.createMessage(msg.channel.id, data);
        break;
        
        case prefix + "tfr":
            const data1 = {
              "embed": {
                "title": "Ton plugin vocal se déconnecte toutes les 5 secondes ? 🤐",
                "description": "\n \nHello je suis le BOT support d'Adastra et je suis là pour t'aider à résoudre ton problème ! ",
                "color": 4886754,
                "footer": {
                  "icon_url": "https://yt3.ggpht.com/a/AGF-l79CpWCFUqmlrCeWtYdy6l4MqJvWllNEDsbtPg=s900-c-k-c0xffffffff-no-rj-mo",
                  "text": "by AdastraGaming"
                },
                "thumbnail": {
                  "url": "https://image.noelshack.com/fichiers/2019/47/5/1574430989-67600674-521441015329765-5369664045848723456-n.png"
                },
                "image": {
                  "url": "https://image.noelshack.com/fichiers/2019/47/5/1574442204-screenshot-150.jpg"
                },
                "fields": [
                  {
                    "name": "\n \nAs-tu vérifié que tu n'as qu'un plugin TFR activé ? 🤔",
                    "value": "\n \nLe TFR Adastra ne fonctionne pas si un autre TFR est activé .. "
                  },
                  {
                    "name": "Tu n'as pas encore le TFR ?! 😱",
                    "value": "Télécharger le [plugin](https://static.adastragaming.fr/gtav/plugin/adastra_tfr_latest.ts3_plugin) !"
                  },
                ]
              }
            };
            bot.createMessage(msg.channel.id, data1  );

            case prefix + "souris":
                const data2 = {
                  "embed": {
                    "title": "Ta souris reste figée au milieu de ton écran ? 🙃 ",
                    "description": "\n \nHello je suis l'Adastra'ssistant et je suis là pour t'aider à résoudre ton problème ! ",
                    "color": 4886754,
                    "footer": {
                      "icon_url": "https://yt3.ggpht.com/a/AGF-l79CpWCFUqmlrCeWtYdy6l4MqJvWllNEDsbtPg=s900-c-k-c0xffffffff-no-rj-mo",
                      "text": "by AdastraGaming"
                    },
                    "thumbnail": {
                      "url": "https://image.noelshack.com/fichiers/2019/47/5/1574430989-67600674-521441015329765-5369664045848723456-n.png"
                    },
                    "image": {
                      "url": "https://nicolasmariuzza.com/assets/splash_1plan-de-travail-13.jpg"
                    },
                    "fields": [
                      {
                        "name": "\n \nMalheureusement c'est un bug connu par nos équipes ! 🤔\n \n",
                        "value": "\n \nLa meilleure solution et une déconnexion suivie d'une reconnexion .. "
                      },
                    ]
                  }
                };
                bot.createMessage(msg.channel.id, data2  );

                case prefix + "altv":
                    const data3 = {
                        "embed": {
                          "title": "Mais comment installer AltV ?! 🤔",
                          "description": "Je suis l'Adastra'ssistant et je suis là pour t'aider à résoudre ton problème 😃 \n \n \n",
                          "url": "https://discordapp.com",
                          "color": 4886754,
                          "footer": {
                            "icon_url": "https://yt3.ggpht.com/a/AGF-l79CpWCFUqmlrCeWtYdy6l4MqJvWllNEDsbtPg=s900-c-k-c0xffffffff-no-rj-mo",
                            "text": "by AdastraGaming"
                          },
                          "image": {
                            "url": "https://altv.mp/img/og-image.jpg"
                          },
                          "fields": [
                            {
                              "name": "⚠️Pour installer AltV, il faut quelques prérequis !⚠️\n \n \n",
                              "value": "\n \n \nEffectivement, votre fichier GTA V doit être le plus propre possible sinon vous risquez des erreurs au lancement d'ALT V ! \n \n \n"
                            },
                            {
                              "name": "⚠️Vous pouvez maintenant installer Alt V⚠️",
                              "value": "\nIl est maintenant temps d'installer [ALTV](https://altv.mp/#/downloads) !"
                            },
                            {
                              "name": "⚠️N'installe pas Alt V n'importe où !",
                              "value": "Il est fortement conseillé d'installer le dossier Alt V dans la racine de C ! "
                            },
                            {
                              "name": "⚠️Nous vous conseillons de créer un dossier adapté⚠️",
                              "value": "Effectivement, créez un dossier dédié à AltV où se trouve les fichiers en rapport avec le MP"
                            },
                          ]
                        }
                      };
                      bot.createMessage(msg.channel.id, data3);
            break;

          case prefix + "aide":
                      const data4 = {
                        "embed": {
                          "title":"Que puis-je faire pour vous ?!",
                          "description": "Je suis l'Adastra'ssistant et voici ce que je propose :",
                          "url": "https://www.discordapp.com",
                          "color": 4886754,
                          "footer":{
                            "icon_url": "https://yt3.ggpht.com/a/AGF-l79CpWCFUqmlrCeWtYdy6l4MqJvWllNEDsbtPg=s900-c-k-c0xffffffff-no-rj-mo",
                            "text": "by AdastraGaming"
                          },
                          "image": {
                            "url": "https://nicolasmariuzza.com/assets/splash_1plan-de-travail-8.jpg" 
                          },
                          "fields": [
                          {
                            "name": "Voici nos différentes commandes (toujours avec ! devant)",
                            "value": "ip -> ipcheck\ntfr -> problème de TFR\naltv -> installation d'Alt V\naide -> liste de commandes"
                          },
                        ]
                      }
                    };
                    bot.createMessage(msg.channel.id, data4);
        break;
    }
});
bot.connect();
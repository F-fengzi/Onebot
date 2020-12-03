// Initialize.
const Discord = require("discord.js");
const client = new Discord.Client();

var ch = false;
const words = ["Oh","Hello","Hi","One","Apple","Banana","Pear","Grapes","Food","Cloth","AMD","TV","Fengzi","No","Yes","Nah","Keyboard","Mouse","Memory","Motherboard","Storage","CPU","Graphics card","Power supply","Monitor","Google","Duckduckgo","Dogs","Cats","Ducks","Testie","Charlie","Website","CHINA","Hmm","Umm","Sofa","Floor","Water","Lava","Minecraft","Mojang","Bugjang","Bilibili","Youtube","Desk","Earphones","Headphone","Lamp","Switch","Box","Pencil","Doge","Wall","Sky","Grass","Lakes","Cloud","Ground","Microsoft","Macrosoft","Windows","Linux","Music","Dance","Printer","House","Tomato","Potato","Discord","Bot","Java","Javascript","HTML","CSS","Python","C","C++","Doors","Drawer","Locker","Done","Much","More","Such","Many","Uhh","Oof","Yay","Yeeee","Bed","Spam","Things","Yeah","Stable","Unstable","Notepad","VSCode","Birthplace","Server","Raspberry","Pie","Blueberry","Raspberry Pi","Meme","Brother","Sister","Dictionary","Rain","Cloudy","Fog","Mountains","Hill","Heal","Dew","Bamboo","Trees","Birds","Sunny","Channel","Minceraft","Notch","Words","Alphabet","Letters","Console","Pog","Client","Log","Apps","Application","Message","Software","Hardware","Open source","Open sauce","Rip","Processor","Architecture","Ryzen","Zen","WeChat","QQ","Facebook","Messenger","Instagram","Text","Lab","Android","Amazon","Advanced","Onebot","Ready","True","False","Agreed","On","Off","What","Where","When","Why","Who","Whose","Open","Close","Speaking","Talking","Saying","Walking","Thinking","Coding","Programming","Running","Swimming","Wow","Asking","Pool","Them","He","She","Him","Her","They","Returning","Return","Forward","Back","Lower","Higher","Command","Stop","Content","Sent","Help","**SOS**","Shutdown","Restart","Start","Shut","Boot","Boat","Ship","Sea","Ocean","Version","Spam","Spamming","Case","Universe","Stars","Empty","Full","Fire","Logo","Design","Slave","White","Black","Grey","All","Again","Air","Gas","Liquid","Solid","Energy","Electric","Waves","Light","Dark","Verification","Affirm","Confirm","Money","Gold","Tencent","Alibaba","Baidu","Cooling","Fan","Wires","Impostor","Space","Spring","Summer","Fall","Winter","Invite","That","There","Those","This","Here","These","Set","Changed","ID","Card","Core","Token","Leak","Reveal","Random","World","If","Phew","Hack","Disorder","Translate","Cheat","Search","Order","Engine","Bullshit","Sound","Smell","Feel","Touch","Old","New","Free","Paid","Ubuntu","Debian","Raspbian","Fedora","Mint","Manjaro","Deepin","Mac","MacOS","Adding","Typing","Deleting","Praying","Waiting","Hope","Few","Only","Lonely","Books","Chat","Working","Studying","Saving","Rescue","Wish","Now","Later","*Comes*","Run","Welcome","Camera","Phone","Notification","Story","Name","About","Mode","Update","Upgrade","System","Complex","Simple"];

function updateActivity(){
  if (client.guilds.cache.size <= 1){
    var before = "only " + client.guilds.cache.size + " server";
  }else{
    var before = "over " + client.guilds.cache.size + " servers";
  }
  if (ch){
    var after = "Spamming mode: On";
  }else{
    var after = "Spamming mode: Off";
  }
  client.user.setActivity(before + " | " + after + " | Onebot help", { type: "WATCHING"});
}

client.on("ready", () => {
  console.log("One channel. Onebot.");
  updateActivity();
});

// Main.
client.on("message", message => {
  // I love to update things.
  updateActivity();
  
  // Advanced bot won't talk to other bots.
  if (message.author.bot) {return;}

  // Ping.
  if (message.content.toLowerCase().startsWith("ping")){
    message.channel.send("Ping?");
  }

  // Them.
  if (message.content.toLowerCase() == ("testie")){
    message.channel.send("...");
  }
  if (message.content.toLowerCase() == ("charlie")){
    message.channel.send("Woof.");
  }

  // Commands.
  if (message.content.toLowerCase().includes("onebot")) {
    if (message.content.toLowerCase().includes("stop")){
      if (ch){
        message.channel.send("Onebot is now stopped. Say \'onebot setChannel\' again to restart.");
      }else{
        // QAQ.
        message.channel.send("Onebot is not spamming at all QAQ");
      }
      ch = false;
    }else if (message.content.toLowerCase().includes("help") || message.content.toLowerCase().includes("about")){
      message.channel.send("**Onebot.** \n\nVersion 2.1.5 \nDictionary words: " + words.length + " \n\nA spam bot created by Fengzi. \nBrother of Testie and Charlie. \n\nCommands: \nSay \'onebot setChannel\' on the Channel you want to be spammed. \nSay \'onebot stop\' to stop spamming.\nSay \'onebot invite\' to add me to another server. \n\nDone.");
    }else if (message.content.toLowerCase().includes("invite")){
      message.channel.send("Invite me... you monster \nhttps://discord.com/api/oauth2/authorize?client_id=782088979775881237&permissions=321536&scope=bot");
    }else if (message.content.toLowerCase().includes("name")){
      message.channel.send("When he was thinking what kind of thing should his new bot do, \n\nCame up an idea that for a bot that... \n\nRandomly spams... using a word set. \n\n*(So he wrote the whole set himself... \'onebot about\' for details.)* \n\n...but only one channel at a time. \n\nSo...\n\nOne channel Spamming bot. \n\n**Onebot.**");
    }else if (message.content.toLowerCase().includes("setchannel") || message.content.toLowerCase().includes("set channel")){
      if (ch){
        message.channel.send("The spamming channel has changed to here. Say \'onebot stop\' to stop spamming.");
      }else{
        message.channel.send("The spamming channel has set to here. Say \'onebot stop\' to stop spamming.");
      }
      ch = message.channel.id;
      updateActivity();
    }else if (!ch) {
      message.channel.send("Say \'onebot setChannel\' at the channel you want to be spammed.");
    }
  }

  // 'Spamming Core' Needs Verification.
  if (message.channel.id == ch) {
    message.channel.send(words[parseInt(Math.random()*words.length)] + ".");
  }
});

// Oh no. Token reveal.
client.login("y0Vr-t0K3n.h3rE");
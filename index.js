const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login("ODg4ODY2Mjg4ODg4MzE1OTM0.YUY7PQ.kXg9uG8ag47Z87OUMuMWkfvzS8E");
bot.once('ready', () => {
    bot.user.setActivity("Hmmm... Cafézin... \nDigite !ajuda pra ver os comandos.");
    console.log(`Bot online: ${bot.user.tag}!`);
});





    bot.on('message', msg=> {
        if(!msg.member){

        } else{
        
            commandUsed = false;
        if(msg.author.bot) { return; }
        if(msg.content === '!ajuda'){
            commandUsed = true;
            msg.reply('Só digitar !cafe meu mano');
        }
    
        if(msg.content === '!cafe'){
            commandUsed = true;
            const number = Math.floor(Math.random() * 10);
            if(number == 9){
                commandUsed = true;
                msg.reply('Sem café pra tu, tamo arrumando a máquina!');
                msg.react("❌");
                commandUsed = true;
            } else if(number == 2){
                commandUsed = true;
                msg.reply('Sem café pra tu, sua nota tá amassada! Alisa ela ai!');
                msg.react("❌");
            } else if(number == 5){
                commandUsed = true;
                msg.reply('Tente novamente mais tarde, acabou o pó do café pilão!');
                msg.react("❌");
            } else if(number == 0){
                commandUsed = true;
                msg.reply('Tome seu café, com a **COLHERZINHA!**');
                msg.react("☕");
                msg.react("🥄");
            }
            
            else {
            commandUsed = true;
            msg.reply('Tome seu café!');
            msg.react("☕");
        }
        if (commandUsed) {
            bot.channels.cache.get('888884977528340542').send(msg.createdAt + ": O usuário " + msg.member.user.tag + " usou o comando " + msg.content.toLowerCase() + " no servidor " + msg.guild.name);
    }
        
        }
        
    }



});


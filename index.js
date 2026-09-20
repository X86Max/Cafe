const { Client, GatewayIntentBits, Events } = require('discord.js');

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

const token = 'voce deveria colocar o token aqui, tu acha que vou colocar o meu token aqui?'; // Substitua pelo token do seu bot

bot.once(Events.ClientReady, c => {
    console.log(`Bot online: ${c.user.tag}!`);
    c.user.setActivity("Hmmm... Cafézin... \nDigite !ajuda pra ver os comandos.");
});

bot.on(Events.MessageCreate, async message => {
    if (message.author.bot) return;

    let commandUsed = false;

    if (message.content === '!ajuda') {
        commandUsed = true;
        message.reply('Só digitar !cafe meu mano');
    }

    if (message.content === '!cafe') {
        commandUsed = true;
        const number = Math.floor(Math.random() * 10);

        if (number === 9 || number === 2 || number === 5) {
            let replyMessage = '';
            if (number === 9) replyMessage = 'Sem café pra tu, tamo arrumando a máquina!';
            if (number === 2) replyMessage = 'Sem café pra tu, sua nota tá amassada! Alisa ela ai!';
            if (number === 5) replyMessage = 'Tente novamente mais tarde, acabou o pó do café pilão!';
            message.reply(replyMessage);
            message.react("❌");
        } else if (number === 0) {
            message.reply('Tome seu café, com a **COLHERZINHA!**');
            message.react("☕");
            message.react("🥄");
        } else {
            message.reply('Tome seu café!');
            message.react("☕");
        }
    }

    if (commandUsed) {
        const logChannel = bot.channels.cache.get('888884977528340542');
        if (logChannel) {
            logChannel.send(`${message.createdAt}: O usuário ${message.author.tag} usou o comando ${message.content.toLowerCase()} no servidor ${message.guild.name}`);
        } else {
            console.log("Canal de log não encontrado.");
        }
    }
});

bot.login(token);

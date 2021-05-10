const discord = require("discord.js")
const client = new discord.Client()

client.on('ready', () => {
	console.log("Welcome to new Call56Bot")
	client.user.setPresence({game:{name: 'Call56BotJS'}});  
	client.user.setStatus("online")
})

client.login("Token")

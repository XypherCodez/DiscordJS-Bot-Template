module.exports = {
    // Definition
    name: "uptime", // The name of the command 
    category: "info", // The category this will be listed at, for the help cmd
    aliases: [""], // Every parameter can be an alias or empty for no aliases
    cooldown: 10, // This will set it to a 10 second cooldown
    usage: "uptime", // This is for the help command for EACH cmd
    description: "Returns the duration on how long the Bot is online", // The description of the command

    // Running the command with the parameters: client, message, args, user, text, prefix
    run: async (client, message, args, user, text, prefix) => {
        // A sub function to get the time    
        function duration(ms) { 
            const sec = Math.floor(ms / 1000 % 60).toString();
            const min = Math.floor(ms / (60*1000) % 60).toString();
            const hrs = Math.floor(ms / (60*60*1000) % 60).toString();
            const days = Math.floor(ms / (24*60*60*1000) % 60).toString();
            return `\`${days} Days\`, \`${hrs} Hours\`, \`${min} Minutes\`, \`${sec} Seconds\``
        }
        message.reply(`:white_check_mark: **${client.user.username}** is since ${duration(client.uptime)} online`); // Sending the uptime
    }
}
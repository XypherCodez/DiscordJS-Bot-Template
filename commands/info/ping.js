module.exports = {
    // Definition
    name: "ping", // The name of the command 
    category: "info", // The category this will be listed at, for the help cmd
    aliases: ["latency"], // Every parameter can be an alias
    cooldown: 2, // This will set it to a 2 second cooldown
    usage: "ping", // This is for the help command for EACH cmd
    description: "Gives you information on how fast the Bot can respond to you", // The description of the command

    // Running the command with the parameters: client, message, args, user, text, prefix
    run: async (client, message, args, user, text, prefix) => {
        // Creating a temporary message
        const msg = await message.channel.send(`🏓 Pinging....`); 
        // Editing it to the actual latency
        msg.edit(`🏓 Pong!
        Ping is ${Math.round(client.ws.ping)}ms`);
    }
}

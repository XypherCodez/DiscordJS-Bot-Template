module.exports = async (client, reaction, user) => {
    // Logs when a reaction gets removed from a message
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
        // REST OF THE CODE HERE
};


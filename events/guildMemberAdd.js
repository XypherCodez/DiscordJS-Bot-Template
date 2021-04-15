module.exports = async (client, member) => {
    // Logs when a member joins, make sure to have GuildMemberIntents active in https://discord.com/developers
    console.log(member + "joined in: " + member.guild.name)
};


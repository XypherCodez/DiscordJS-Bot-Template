module.exports = client => {
    console.log(`Discord Bot ${client.user.tag} is online!`); // Log when the client goes online
    client.user.setActivity(`${client.user.username}`, { type: "PLAYING" }) // First parameter, is the status, second is an object with type which can be: "PLAYING", "WATCHING", "LISTENING", "STREAMING" (where you need to add a , and then url: "https://twitch.tv/#")
}
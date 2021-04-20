# DiscordJS-Bot-Template

Setup Guide:

Step 1.
- Create a bot Client at [Discord Developer Portal](https://discord.com/developers/applications).

Step 2.
- Copy your bot token. This will be needed in the ```config.json``` file, and will be used to login to your bot!

Step 3.
- Open [Visual Studio Code](https://code.visualstudio.com/download).

Step 4.
- Create a new project folder, and open the terminal and run the following command `git clone https://github.com/XypherCodez/DiscordJS-Bot-Template` to clone this repository into your visual studio!

Step 5.
- Updating config variables, open the `config.json` file and between the `""` place your token inside the quotes, now, we need to choose a prefix, this can be anything you want, some common prefixes include `!`, `?`, so try to avoid a prefix that would collude with other bots in your guild!

Step 6.
- Launching the bot, In your terminal run `node index.js` and the client will login, the first few logins might take a bit, so wait for the console to log that your bot is online!

Adding new features:

Commands:

Interested in adding more commands to your bot? Here's how you can go about doing so!

Step 1.
- Go to the commands folder on your file explorer.

Step 2.
- Either open an already existing category folder, or create a new one.

Step 3.
- Create your command file. ex: `backup.js`.

Step 4.
- Paste the code below into your brand new file!

```js
module.exports = {
    //definition
    name: "", // The name of the command 
    category: "", // The category this will be listed at, for the help cmd
    aliases: ["", ""], // Every parameter can be an alias
    cooldown: 2, // This will set it to a 2 second cooldown
    usage: "", // This is for the help command for EACH cmd
    description: "", // The description of the command

    // Running the command with the parameters: client, message, args, user, text, prefix
    run: async (client, message, args, user, text, prefix) => {
        // Rest of your code...
    }
}
```

Events:

Interested in adding more events to your bot? Here's how you can go about doing so!

Step 1.
- Go to the commands folder on your file explorer.

Step 2.
- Create your event file. ex: `messageReactionAdd.js`.<br>[Event Options](https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelCreate) 

Step 3.
- Paste the code below into your brand new file!

```js
module.exports = client => { // Feel free to add any other parameters needed, or even make this an async function so you can use things such as "await"
    // Rest of you code here...
}
```

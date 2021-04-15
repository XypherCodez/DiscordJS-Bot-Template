const { readdirSync } = require('fs'); // Requireing, the module for reading files 
const ascii = require('ascii-table'); // Requiring ascii-table which is a great tool for creating ascii tables

let table = new ascii("Commands"); // Creating a new table with the name "Commands"
table.setHeading("Command", "Load status");

console.log("Welcome to SERVICE HANDLER") // Logging that it loads

module.exports = (client) => {
    readdirSync("./commands/").forEach(dir => { // Reading each command
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js")); // It will be only a command if it ends with .js
        for (let file of commands) { // For each file which is a command
            let pull = require(`../commands/${dir}/${file}`); // Get informations
            if (pull.name) { // Get the name of the command
                client.commands.set(pull.name, pull); // Set the name of the command
                table.addRow(file, 'Ready'); // Log in table ready
            } else {
                table.addRow(file, `error -> missing a help.name, or help.name is not a string.`); //if something wents wrong, do this
                continue; // And skip
            }
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name)); // If there are aliases, do it too
        }
    });
    console.log(table.toString()); // Showing the table
}

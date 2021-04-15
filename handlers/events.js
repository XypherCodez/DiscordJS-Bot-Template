const fs = require('fs'); // Requireing, the module for reading files 
const ascii = require('ascii-table'); // Requiring ascii-table which is a great tool for creating ascii tables

let table = new ascii("Events"); // Creating a new table with the name "Events"
table.setHeading("Events", "Load status");

module.exports = async (client) => {
    let theevents; // global variable
    fs.readdirSync("./events/").forEach(file => { // reading each events
        theevents =  fs.readdirSync(`./events/`).filter(file => file.endsWith(".js")); // It will be only an event if it ends with .js
        fs.readdir("./events/", (err, files) => { // For each file we will "LOAD THE EVENT"
            if (err) return console.error(err); // If an error log it
                    const event = require(`../events/${file}`); // Create the event from the filename
                    let eventName = file.split(".")[0]; // Get the eventname from it
                    theevents = eventName; // Set it into the global variable
                    client.on(eventName, event.bind(null, client)); // LOAD THE EVENT
            });
    });
    
    //now we have an array for all events in the event folder, we can load it in loop and pass it onto our beautiful table
    for(let i = 0; i< theevents.length; i++){
        try {
            table.addRow(theevents[i], 'Ready'); //log in table ready
        } catch (error) {
            console.error(error.stack); // If there is an error, console log the error stack message
        }
    }
    console.log(table.toString()); //showing the table
	console.log("Logging into the BOT..."); //showing loading status
}

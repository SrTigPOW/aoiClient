const { AoiClient } = require("aoi.js");
require('dotenv').config();

const token = process.env.DISCORD_TOKEN

const client = new AoiClient({
    token: token,
    prefix: "$getVar[prefix]",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

// Load the bot's Commands, Variables, and States from a specific folder within the project.
require('./src/handler/clientVariables')(client);
require('./src/handler/clientStatus')(client);
client.loadCommands("./src/commands");

const { AoiClient } = require("aoi.js");
require('dotenv').config();

const token = process.env.DISCORD_TOKEN
const prefix = process.env.PREFIX

const client = new AoiClient({
    token: token,
    prefix: prefix,
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

require('./src/handler/clientVariables')(client)
require('./src/handler/clientStatus')(client)
client.loadCommands("./src/commands");

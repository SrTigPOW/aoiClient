const { ClientShard } = require("aoi.js");
require('dotenv').config();

const token = process.env.DISCORD_TOKEN

// In this case, the bot is configured to use only one shard (totalShards: 1).
// You can change this value according to your bot's needs.
const sharder = new ClientShard("./aoiClient.js", {
    token: token,
    totalShards: 1
});

sharder.on("shardCreate", (shard) => console.log(`Launched shard ${shard.id}`));
sharder.startProcess();

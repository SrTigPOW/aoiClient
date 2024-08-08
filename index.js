const { ClientShard } = require("aoi.js");
require('dotenv').config();

const token = process.env.DISCORD_TOKEN

const sharder = new ClientShard("./aoiClient.js", {
    token: token,
    totalShards: 1
});

sharder.on("shardCreate", (shard) => console.log(`Launched shard ${shard.id}`));
sharder.startProcess();
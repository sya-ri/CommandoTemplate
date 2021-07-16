const { CommandoClient } = require("discord.js-commando");
const path = require("path");

const client = new CommandoClient({
  commandPrefix: "!",
  owner: "586824421470109716", //** 自分のID */
  invite: "https://discord.gg/", //** 自分のサーバー招待コード */
});

client.once("ready", () => {
  console.log(`=== Login: ${client.user.tag} ===`);
  client.user.setActivity("Hi, there!");
});

client.on("error", console.error);

client.registry
  .registerDefaultTypes()
  .registerGroups([["mod", "モデレーション操作"]])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, "commands"));

client.login("your bot token");

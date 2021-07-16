const { Command } = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class BanCommand extends Command {
  constructor(client) {
    super(client, {
      name: "ban",
      description: "IDで指定したユーザーをBANします。",
      aliases: [],
      group: "mod",
      memberName: "ban",
    });
  }

  run(message, args, fromPattern, result) {
    if (!message.member.permissions.has("BAN_MEMBERS"))
      return message.reply("権限が足りません。");
    if (message.mentions.members.size !== 1) return;
    const member = message.mentions.members.first();
    if (!member.bannable) return message.reply("BANできません");

    member.ban({ reason: `${message.author.tag}によるモデレーション操作。` });

    message.reply(`${member.user.tag} をBANしました`);
  }
};

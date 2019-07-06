const { Command } = require('discord-akairo');

class SumCommand extends Command {
	constructor() {
		super('sum', {
			aliases: ['sum']
		});
	}

	*args() {
		const x = yield {
			type: 'integer',
			prompt: {
				start: message => 'Enter a number',
				retry: message => `That's not a valid number! Try again..`
			}
		};

		const y = yield {
			type: 'integer',
			prompt: {
				start: message => 'Enter another number',
				retry: message => `That's not a valid number! Try again..`
			}
		};

		return { x, y };
	}

	async exec(message, args) {
		message.reply(`${args.x}+${args.y}=${args.x+args.y}`);
	}
}

module.exports = SumCommand;
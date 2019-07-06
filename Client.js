const { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } = require('discord-akairo');

class Client extends AkairoClient {
	constructor() {
		super({}, {
			disableEveryone: true
		});

		this.commandHandler = new CommandHandler(this, {
			directory: './commands/',
			prefix: '!',
			argumentDefaults: {
				prompt: {
					timeout: 'Time ran out, command has been cancelled.',
					ended: 'Too many retries, command has been cancelled.',
					cancel: 'Command has been cancelled.',
					retries: 5,
					time: 30000
				},
			}
		});

		this.inhibitorHandler = new InhibitorHandler(this, {
			directory: './inhibitors/'
		});

		this.listenerHandler = new ListenerHandler(this, {
			directory: './listeners/'
		});

		this.setup();
	}

	setup() {
		this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
		this.commandHandler.useListenerHandler(this.listenerHandler);

		this.listenerHandler.setEmitters({
			commandHandler: this.commandHandler,
			inhibitorHandler: this.inhibitorHandler,
			listenerHandler: this.listenerHandler
		});

		this.commandHandler.loadAll();
		this.inhibitorHandler.loadAll();
		this.listenerHandler.loadAll();
	}

	async start(token) {
		await this.login(token);
		console.log('Ready!');
	}
}

module.exports = Client;
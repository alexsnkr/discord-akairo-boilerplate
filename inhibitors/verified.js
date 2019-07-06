const { Inhibitor } = require('discord-akairo');

class VerifiedInhibitor extends Inhibitor {
	constructor() {
		super('notVerified', {
			reason: 'not-verified'
		})
	}

	async exec(message, command) {
		//Check license is verified
		console.log('Check verification');
		
		return Promise.resolve();
	}
}

module.exports = VerifiedInhibitor;
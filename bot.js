require('dotenv').config()

const Client = require('./Client');
const client = new Client();

client.start(process.env.TOKEN);
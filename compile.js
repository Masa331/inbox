const Path = require('path');
const Fs = require('fs');
const Solc = require('solc');

const inboxPath = Path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = Fs.readFileSync(inboxPath, 'utf8');

module.exports = Solc.compile(source, 1).contracts[':Inbox'];

// Modules - Encapsulated Code (only share minimum)
// CommonJS, eveyr file is module (by default)
const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavour');
require('./07-mind-grenade')
sayHi('susan');
sayHi(names.john)
sayHi(names.peter)
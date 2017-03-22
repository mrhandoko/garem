var salty = require('./index.js')

console.log(salty(6))
// Prints Number Character, for example: 9bzL21, dCCnny, etc

// Or you can add it as salt on crypto Node js
const crypto = require('crypto');

// assign salty to secret
const secret = salty(5)
const hash = crypto.createHmac('sha256', secret)
                   .update('Nasi Padang')
                   .digest('hex');

console.log(hash);

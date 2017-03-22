var garem = require('./index.js')

console.log(garem(6))
// Prints Number Character, for example: 9bzL21, dCCnny, etc

// Or you can add it as salt on crypto Node js
const crypto = require('crypto');

// assign garem to secret
const secret = garem(5)
const hash = crypto.createHmac('sha256', secret)
                   .update('Nasi Padang')
                   .digest('hex');

console.log(hash);

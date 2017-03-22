# Garem

*This npm will generate random salt code with length as expected and education purpose. In Node.js you can add as secret or salt.*

Salty will generate `random code` with `simplicity`.

### Usage
```javascript
var garem = require('garem')
garem(character length)
```
### Example
```javascript
var garem = require('garem')

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

// will print: 5fa61cde491ece44ffd95bf72cbcd5e65c23da2d97a7098490268eaa04df38e1

```

# Salty

*This npm will generate random salt code with length as expected and education purpose only. In Node.js you can add as secret or salt.*

Inline `code` has `back-ticks around` it.

### Usage
```javascript
var salty = require('salty')
salty(character length)
```
### Example
```javascript
var salty = require('salty')

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

// will print: 5fa61cde491ece44ffd95bf72cbcd5e65c23da2d97a7098490268eaa04df38e1

```

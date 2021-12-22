# nodejs-client
The NodeJS client for SpellCheckJS
## Installation
```
npm i --save SpellCheckJS/nodejs-client
```
## Usage
```javascript
const spellcheck=require("SpellCheckJS");
console.log(spellcheck.applyCorrections("the witdh of malpe leaves is hard to guess"));
if(spellcheck.isCorrectlySpelled("'Width' is easy to spell. How could you mess that up? You'd be surprised.")) {
  console.log("Yay");
}
else {
  throw new Error("Uh-oh. :(");
}
```

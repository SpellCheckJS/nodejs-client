const fs=require("fs");
const db=JSON.parse(fs.readFileSync("spellcheck.json").toString());
const applyCorrections=function(input) {
    let inputOut=input;
    let loopCount=0;
    Object.keys(db).forEach(entryName => {
    let entry=dbJSON[entryName];
    
    while(inputOut.includes(entryName)) {
        loopCount++;
        if(loopCount==100) {
            console.warn("SpellCheckJS has run 100 times.");
        }
        else if(loopCount==200) {
            console.warn("SpellCheckJS has run 200 times. You may have supplied maliciously crafted data to the function.");
        }
        fileTextOut=fileTextOut.replace(entryName,entry);
    }
    // This while loop is where the biggest risk is. With a malicious entry, a user could dOS clients by repetitively increasing input length. Thus the need for thorough submission review.
});
};
const SpellCheckJS={
    db,
    applyCorrections
};
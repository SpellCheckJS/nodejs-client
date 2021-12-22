const fs=require("fs");
const db=JSON.parse(fs.readFileSync("spellcheck.json").toString());
const applyCorrections=function(input) {
    let output=input;
    let loopCount=0;
    Object.keys(db).forEach(entryName => {
        let entry=db[entryName]; 
        while(output.includes(entryName)) {
            loopCount++;
            if(loopCount==100) {
                console.warn("SpellCheckJS has run 100 times.");
            }
            else if(loopCount==200) {
                console.warn("SpellCheckJS has run 200 times. You may have supplied maliciously crafted data to the function.");
            }
            output=output.replace(entryName,entry);
        }
        // This while loop is where the biggest risk is. With a malicious entry, a user could dOS clients by repetitively increasing input length. Thus the need for thorough submission review.
    });
    return output;
};
const isCorrectlySpelled=function(input) {
    try {
        Object.keys(db).forEach(entryName => {
            let entry=db[entryName];
            if(input.includes(entryName)) {
                throw new Error();
            };
            // This while loop is where the biggest risk is. With a malicious entry, a user could dOS clients by repetitively increasing input length. Thus the need for thorough submission review.
        });
        return true
    }
    catch(e) {
        return false;
    }
}
const SpellCheckJS={
    db,
    applyCorrections
};
module.exports=SpellCheckJS;
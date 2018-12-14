//change every letter in the string following it in the alphabet
//a becomes b, z becomes a
//once every letter is changed, we need to capitalize vowels

function letterChanges(str){
    var converted = str.replace(/[a-z]/gi), function(char){
        return (char === 'z' || char === 'Z') ? 'a' : string.fromCharCode(char.charCodeAt() + 1);
    }
}

//1. we replace every letter in string with letter following it by getting char code number of the letter, adding 1 to it 
//2. then, converting new char code number to letter with from charcode function
//3. check to see if char is Z, so we can convert to a(shown on botton)

var capitalized = converted.replace(/a|e|i|o|u/gi),
    function(vowel){
        return vowel.toUpperCase()
    };
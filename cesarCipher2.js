
function cesarCipher(str, num){
    num = num % 26;
    var lowerCaseString = str.toLowerCase();
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var newString = '';

    for(var i = 0; i< lowerCaseString.length; i++){
        var currentLetter = lowerCaseString[i];
        if( currentLetter === ' '){
            newString += currentLetter;
            continue;
        }
        var currentIndex = alphabet.indexOf( currentLetter );
        var newIndex = currentIndex + num;
        if( newIndex > 25) newIndex = newIndex -26;
        if( newIndex < 0) newIndex = 26 + newIndex;
        if(str[i] === str[i].toUpperCase()){
            newString += alphabet[newIndex].toUpperCase();
        }
        else newString += alphabet[ newIndex ];
    }

    return newString
}

console.log( cesarCipher('javascript', -9000));
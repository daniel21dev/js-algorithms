
function isPalindrome( string ){
    string = string.toLowerCase();
    var charactersArr = string.split('');
    var validCharacters = 'qwertyuiopasdfghjklñzxcvbnm'.split('');

    var letterArr = [];
    charactersArr.forEach( char =>{
        if( validCharacters.indexOf(char) > -1) letterArr.push(char)
    });

    if( letterArr.join('') === letterArr.reverse().join('')) return true;
    else return false;
}

console.log( isPalindrome("Madam I'm Adam") )
console.log( isPalindrome("Race car") )
console.log( isPalindrome("Coding javascript") )
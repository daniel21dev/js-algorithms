
const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","a","b"];

function cesarCipher(str, num){
    var lowerCaseString = str.toLowerCase();
    var crifred = '';
    str.split('').forEach( char =>{
        crifred = crifred + abc[ abc.indexOf( char )+num ]
    });

    console.log( crifred )
}

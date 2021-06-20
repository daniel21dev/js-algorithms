
function reverseWords(str){

    let words = str.split(' ');
    let result = '';

    words.forEach( word =>{
        result += word.split('').reverse().join('') + ' ';
    })

    return result;
}

console.log(
reverseWords('no se que poner aqui xD'))
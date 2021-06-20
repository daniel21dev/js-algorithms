
function harmlessNote( noteText, megazineText){
    var noteArr = noteText.split(' ');
    var megazineArr = megazineText.split(' ');
    var megazineObj = {};

    megazineArr.forEach( word =>{
        if( !megazineObj[word] ) megazineObj[word] = 0;
        megazineObj[word]++;
    });

    var notePossible = true;
    noteArr.forEach( word=>{
        if( megazineObj[word]){
            megazineObj[word]--;
            if( megazineObj[word] < 0) notePossible = false;
        }
        else notePossible = false;
    });

    return notePossible;
 }

 console.log(
harmlessNote('this is a secret note for you from a secret admirer', 'this is all the megazine text in the megazine'))
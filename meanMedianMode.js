
function getMean( arr ){
    let sum = 0;
    arr.forEach( num => sum += num );
    return sum / arr.length;
}

function getMedian( arr ){
    arr = arr.sort((a,b)=> a-b);

    return arr.length%2 === 0 
        ? [arr[(arr.length/2)-1], arr[(arr.length/2) ]]
        : arr[Math.floor(arr.length/2)];
}

function getMode( arr ){
    let modeObj = {};
    arr.forEach( elem =>{
        if( !modeObj[ elem] ){
            modeObj[elem] = 1;
        }else{
            modeObj[elem]++;
        }
    })
    
    var maxFrecuncy = 0;
    let modes = [];
    for( var num in modeObj){
        if( modeObj[num] > maxFrecuncy){
            modes = [num];
            maxFrecuncy = modeObj[num];
        }else if( modeObj[num] === maxFrecuncy){
            modes.push( num )
        }

        if( modes.length === Object.keys( modeObj).length) {
            modes = [];
        }
    }
    return modes;
}

function meanMedianMode( arr ){
    return{
        mean: getMean( arr ),
        median: getMedian( arr ),
        mode: getMode( arr )
    }
}

console.log( meanMedianMode([1,2,3,4,5]) );
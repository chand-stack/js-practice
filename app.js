
function counting(line){

    let parts = line.split('');
    let vowelWord = []

    for(let i = 0; i<parts.length; i++){
        const element = parts[i];
        
        if(element==='a' || element==='e' || element==='i' || element==='o' || element==='u'){
            vowelWord.push(element);
        }
        
    }
    return vowelWord 
}

function consonentCount(lines){
    let parts = lines.split('');
    let consonentWord = []


    for(let i = 0; i<parts.length; i++){
        const element = parts[i];
        
         if (element!=='a' && element!=='e' && element!=='i' && element!=='o' && element!=='u' && element!== ' '){
            consonentWord.push(element)
        }
        
    }
    return consonentWord

}



const lyric = 'tumi bondhu kala pakhi ami jeno ki bososnto. batashe tomay bolte parini'
const total = counting(lyric);
console.log('Vowel Words are: ',total);


const consonentTotal = consonentCount(lyric)
console.log('Consonent Words are: ',consonentTotal);

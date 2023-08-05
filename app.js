
function revers(lines){
let wordz = lines.split(' ')
const blabla= []

for(let i = wordz.length-1; i>=0; i--){
    const index = i;
    const element = wordz[index];
    blabla.push(element)
}
const full= blabla.join(' ');
return full

}







let lyric = ' dubechi ami tomar chokher ononto mayay'
console.log(revers(lyric));
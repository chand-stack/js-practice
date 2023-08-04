
function maxMark(jimMark, delaMark, chinkuMark){

  const highMark = Math.max(jimMark, delaMark, chinkuMark);
  if (highMark===jimMark){
    return 'Jim cake khaibo'
  }
  else if(highMark===delaMark){
    return 'dela cake khaibo'
  }
  else if(highMark===chinkuMark){
    return 'chinku cake khaibo'
  }

}





const x = 69;
const y = 97;
const z = 99;

const largeMark = maxMark(x,y,z)
console.log(largeMark);
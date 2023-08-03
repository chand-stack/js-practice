function mark(num){

    if(num >= 80 && num < 90){
        return 'grade A'
    }else if(num >= 90){
        return 'grade A+'
    }
    else if(num >= 70 && num < 80){
    return 'grade B'}
    else if(num >= 60 && num < 70){
    return 'grade C'}
    else if(num >= 50 && num < 60){
        return ' grade D'
    }
    else if (num < 50){
        return ' grade F'
    }

}
let alia = 95;
let aliaGet = mark(alia);
console.log('Alia get',aliaGet);

let dalia = 66;
let daliaGet = mark(dalia);
console.log('Dalia get',daliaGet);

let salia = 80;
let saliaGet = mark(salia);
console.log('Salia get', saliaGet);

let malia = 59;
let maliaGet = mark(malia);
console.log('Malia get', maliaGet)

let lilia = 47;
let liliaGet = mark(lilia);
console.log('Lilia get',liliaGet)

let jalaiya = 77;
let jalaiyaGet = mark(jalaiya);
console.log('Jalaiya Get',jalaiyaGet)
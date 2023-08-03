function avgMark(mark1, mark2, mark3, mark4, mark5){
    let totalMarks = mark1 + mark2 + mark3 + mark4 + mark5;
    let avgmarks = totalMarks/5;
    let decimal = avgmarks.toFixed(2);
    let strignTonum = parseFloat(decimal);

    return strignTonum;

}

let math = 72.25;
let biology= 65;
let chemistry= 80;
let physics= 33.45;
let bangla= 99.50;

const markInavg = avgMark(math, biology, chemistry, physics, bangla);
console.log(markInavg);
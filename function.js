function add(num1, num2, num3){
    const total = num1 + num2 + num3;
    return total;
}

const total1= add(3,4,5);
const total2= add(6,7,8);
const total3= add(9,10,11);

const allTotal = add(total1,total2,total3);

console.log(allTotal);

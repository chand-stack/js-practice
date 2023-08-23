// const numbers = [4, 5, 2, 8, 10]

// // const doubleIt = num => num * 2;


// const result = numbers.map(numm => numm * 2)

// console.log(result)




// const doubled = [];

// for( const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }

// console.log(doubled)

// const numbers = [ 12, 10, 8, 15, 7];

// const doubled = numbers.map(num => num*2)
// console.log(doubled)

// const jog5 = numbers.map(num => num+5)
// console.log(jog5);

// const halv = numbers.map(x => x/2);
// console.log(halv)

// const friends = ['tom', 'john', 'micheal', 'oliver']

// const lenths = friends.map(x => x.length)
// console.log(lenths);

// const firstChar = friends.map( x => x[0])
// console.log(firstChar);


// const numbers = [ 1, 5, 6, 4, 15];

// const result = numbers.forEach(x => console.log(x))








const numbers = [ 1, 5, 6, 4, 15]; 

const players = [75, 65 , 67, 72, 55, 59];
// const selected = players.filter(x => x === 67);
// const selected = players.filter(x => x%2 == 0 );
const selected = players.filter(x => x%2 === 1)
console.log(selected);
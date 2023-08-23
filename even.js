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








// const numbers = [ 1, 5, 6, 4, 15]; 

// const players = [75, 65 , 67, 72, 55, 59];
// // const selected = players.filter(x => x === 67);
// // const selected = players.filter(x => x%2 == 0 );
// const selected = players.filter(x => x%2 === 1)
// console.log(selected);

// const friends = ['tom', 'john', 'micheal', 'oliver']

// const oddChar = friends.filter(x => x.length%2 === 0)

// console.log(oddChar)

// const friends = ['tom', 'john', 'micheal', 'oliver']

// const players = [75, 65 , 67, 72, 55, 59];

// const selected = players.find(p => p > 70)
// console.log(selected)

// const numbers = [75, 65 , 67, 72, 55, 59];
// const sum = numbers.reduce((p,c) => p+c)
// console.log(sum)

const products = [
    {id: 1, name:'Lenovo', price:65000},
    {id: 2, name:'Dell', price:45000},
    {id: 3, name:'Hp', price:40000},
    {id: 4, name:'Mac', price:150000}
]

// const names = products.map(x => x.name)
// // console.log(names)
// const prices = products.map(p => p.price);
// // console.log(prices)

// const filter = products.filter(p => p.price>50000);
// // console.log(filter)

// const find = products.find(p => p.price < 50000);
// // console.log(find)

// const total = products.reduce((p,c) => p + c.price,0)
// console.log(total)

// class Teacher{
//     constructor(name, subject){
//         this.name = name;
//         this.subject = subject
//     }
// }

// const alim = new Teacher('Alim', 'English')
// console.log(alim)

// class Phones{
//     constructor(model, price){
//         this.model = model
//         this.price = price
//     }
// }

// const iphone = new Phones('Iphone', 150000)
// console.log(iphone)
// const samsung = new Phones('Samsung', 120000)
// console.log(samsung)

// class Shoes{
//     constructor(brand, price){
//         this.brand = brand;
//         this.price = price;
//     }
// }

// const bata = new Shoes ('Bata', 5000)
// console.log(bata)
// const adidas = new Shoes('Adidas', 6000)
// console.log(adidas)
// const nike = new Shoes('Air Jordan', 20000)
// console.log(nike)

 class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
 }

 class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name,price)
        this.seat = seat
        this.ticketPrice = ticketPrice
    }
 }

 class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price)
        this.load= load  
    }
 }
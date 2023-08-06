var shoppingCart={
  books : 3,
  sunglass : 2,
  keyboard : 5,
  mouse : 1,
  pen : 25
}

let penCount = shoppingCart.pen;

let penCount = shoppingCart['pen']

let penCount = Object.keys(shoppingCart);

let values= Object.values(shoppingCart);

let propertyName = 'keyboard'
let propertyvalue = shoppingCart[propertyName]

console.log(propertyvalue);

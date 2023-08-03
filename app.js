function traffic(light){
if(light === 'Red'){
    return 'you are in danger'
}
else if (light === 'Yellow'){
    return 'you have to stop'
}
else if(light === 'Green'){
    return 'you can go now'
}
}

let firstLight = 'Red'
let redlight = traffic(firstLight);
console.log('light is red',redlight);

let secondLight = 'Yellow'
const yellowLight = traffic(secondLight);
console.log('light is yellow',yellowLight);

let thirdLight = 'Green'
const greenLight = traffic(thirdLight);
console.log('light is green',greenLight);
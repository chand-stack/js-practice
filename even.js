const shoppingCart = [
    { name : 'shoe', price:1200},
    { name:'shirt', price:2200},
    { name:'pant', price:3700},
    {name:'belt', price:600}

]

function totalCost(shoppingList){
    let expense = 0;

    for(let i =0; i<shoppingList.length; i++){
        const elements = shoppingList[i];
        expense = expense+elements.price;
    }

    return expense;



}

const totalExpense = totalCost(shoppingCart);
console.log(totalExpense);
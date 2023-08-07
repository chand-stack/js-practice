const phones =[
     {name : 'samsung', camera : '12MP', storage: '32GB', price:36000 , color:'silver'},
     {name : 'walton', camera : '12MP', storage: '32GB', price:22000 , color:'silver'},
     {name : 'Iphone', camera : '12MP', storage: '32GB', price:82000 , color:'silver'},
     {name : 'Xaomi', camera : '12MP', storage: '32GB', price:52000 , color:'silver'},
     {name : 'Oppo', camera : '12MP', storage: '32GB', price:20000 , color:'silver'},
     {name : 'Nokia', camera : '12MP', storage: '32GB', price:40000 , color:'silver'},
     {name : 'HTC', camera : '12MP', storage: '32GB', price:62000 , color:'silver'},

]


function cheapestPhone(phonesArr){

    let myPhone = phonesArr[0];

    for(let i=0; i<phonesArr.length; i++){
        const elements = phonesArr[i];

        if(elements.price<myPhone.price){
            myPhone = elements;
        }
        
    }
    return myPhone

}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
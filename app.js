
function bestFriend(nameArr){

    let myFriend = ''

    for(let i = 0; i<nameArr.length; i++){
        const element = nameArr[i];
        if(element.length>myFriend.length){
            myFriend = element
        }
    }
return myFriend;
}

let namelist = ['sajid', 'mamun', 'kamal','chinku', 'pinku','chand rahman', 'munna']

const finalName = bestFriend(namelist)
console.log(finalName);


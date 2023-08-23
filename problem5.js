function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return 'Array is empty'
    }
    let x = 0;
    for (let i = 0; i < changeArray.length; i++) {
        let element = changeArray[i];
        x += element
    }

    if (x >= totalDue) {
        return true
    } else {
        return false
    }

}

console.log(canPay([],10))

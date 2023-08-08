function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
        return 'Please Enter an Array'
    }
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // console.log(element);
        if (element < 0) {
            return 'please Enter a number of Array'
        }
    }

    if (arr[0] === arr[1]) {
        return "Equal"
    }

    let x = []
    x.push(Math.max(...arr))
    x.push(Math.min(...arr))
    return x

}


const output = sortMaker([4, 4, 5]);
console.log(output);
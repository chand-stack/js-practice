function cubeNumber(number) {

    if(typeof number !== "number"){
        return 'Please input a Number'
    }else if(number<0){
        return 'Please input a positive Number'
    }
    const result = number*number*number;
    return result
}


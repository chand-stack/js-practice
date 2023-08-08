function findAddress(obj){

    if(typeof obj !== "object"){
        return 'Please Provide an Object'
    }else{
        const prop1 = obj.street || '__'
        const prop2 = obj.house || '__'
        const prop3 = obj.society || '__'

        let result = prop1 + ','+prop2+ ','+prop3
        return result
    }
    


}

let output = findAddress({
    street: 10, 
    house: "15A",
    society: "EarthPerfect"
})
    console.log(output)
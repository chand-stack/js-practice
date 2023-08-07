function isJavaScriptFile(file){

    if(typeof file !== 'string'){
        return 'Please provide a file'
    }else{
        if(file.toLowerCase().endsWith('.js'.toLowerCase())){
              return true
        }else{
            return false
        }
    }


}

console.log(isJavaScriptFile('practice.js'))
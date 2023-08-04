

function signal(num){



    if(num==='red'){
        return 'you are in danger'
    }else if(num==='yellow'){
        return 'you have to stop'
    }else if(num==='green'){
        return 'you can go now'
    }
}
 let   light1= 'red';
 let light2= 'yellow';
  let  light3= 'green'


const totalsignal = signal(light1);
console.log(totalsignal);

const totalsignal1 = signal(light2)
console.log(totalsignal1);

const totalsignal2 = signal(light3);
console.log(totalsignal2);
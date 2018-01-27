const isAdult=(age)=>{
    if(age<18){
        return "underage";
    }else{
        return "can watch the movie";
    }
}

const canDrink=(age)=>{
    if(age<18){
        return "underage";
    }else{
        return "can drink beer";
    }
}
const isSenior=(age)=>{
    if(age>55){
        return "yo oldy";
    }else{
        return "you are quite young";
    }
}

export default isSenior;

export{
    isAdult,canDrink
}

// import isSenior,{
//     isAdult,canDrink
// } from './utils.js';

// console.log(isSenior(19));
// console.log(canDrink(12));
// console.log("i have th ewill to work");
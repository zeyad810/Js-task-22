function evenOrOdd(num ) {
    if (Math.round(num)%2==0) {
        return`${num} is even`;
    }else if(Math.round(num) %2==1){
        return `${num} is odd`;
        
    } else if(typeof num == typeof "A"  ) {
        return `please use a number`
    } 
    else {
        return`no number given`
    }
}
console.log(evenOrOdd(7));
console.log(evenOrOdd(8));
console.log(evenOrOdd(8.2));
console.log(evenOrOdd('hello'));
console.log(evenOrOdd());

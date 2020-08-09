function stopWatch(){
    let number = 0;
    return function childFunc(){
        number++;
        return number;
    }
}
const func1 = stopWatch();
const func2 = stopWatch();
console.log(func1());
console.log(func1());
console.log(func1());
console.log(func1());
console.log(func2());
console.log(func2());
console.log(func2());

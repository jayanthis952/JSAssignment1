function fact(n){
    if(n < 0){
        return "Number has tobe positive."
    }
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * fact(n-1);
    }
}
let n = 4;
result = fact(n)
console.log("Factorial of " + n + " : " + result);


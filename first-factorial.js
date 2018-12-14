//have the function firstFactorial(num) take num parameter being passed
//and return factorial of it 
//for instance, if num=4, program should return (4*3*2*1)=24

function firstFactorial(num){
    if (num===0 || num ===1){
        return 1
    }
    else {
        return num * firstFactorial(num-1)
    }
    return num
}; 

//1. if num equals 0 || 1, return 1
//2. otherwise, return num multiplied by firstFactorial(num-1)--counting down...
let result = '';
let resNode = document.getElementById('res');

//** btn value onclick
let key = (value) => {
    result += value;
    resNode.innerHTML = result;
}
//** btnClr
let clear = () => {
    result = '';
    resNode.innerHTML = result;
}
document.getElementById('btnClr').addEventListener('click', clear);

//** operations
// parseInt(value, 2) -> conversion from NON based-10 int string to based-10 int string
// number.toString(2) -> conversion from base-10(decimal) to base-2(binary) int string
let operation = () => {
    let operationRes;
    // ADDITION 
    if(result.indexOf('+') !== -1){         
        let nums = result.split('+');
        let x = parseInt(nums[0], 2);    //operand 1
        let y = parseInt(nums[1], 2);    //operand 2
        let add = x + y;
        operationRes = add.toString(2);  
    }
    // SUBTRACTION
    else if(result.indexOf('-') !== -1){         
        let nums = result.split('-');
        let x = parseInt(nums[0], 2);    //operand 1
        let y = parseInt(nums[1], 2);    //operand 2
        let sub = x - y;
        operationRes = sub.toString(2);  
    }
    // MULTIPLICATION
    else if(result.indexOf('*') !== -1){         
        let nums = result.split('*');
        let x = parseInt(nums[0], 2);    //operand 1
        let y = parseInt(nums[1], 2);    //operand 2
        let mul = x * y;
        operationRes = mul.toString(2);  
    }
    // DIVISION
    else if(result.indexOf('/') !== -1){         
        let nums = result.split('/');
        let x = parseInt(nums[0], 2);    //operand 1
        let y = parseInt(nums[1], 2);    //operand 2
        let div = x / y;
        operationRes = div.toString(2);  
    }
    
    result = operationRes;
    resNode.innerHTML = result;
}
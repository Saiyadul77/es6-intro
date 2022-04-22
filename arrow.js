// function declare
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

// function expression
const add2 = function add2(num1, num2) {
    return num1 + num2;
}


// function expression (anoymous)

const add3 = function (num1, num2) {
    return num1 + num2;
}
// arrow function
const add4 = (num1, num2) => num1 + num2;
const result = add(15, 30);
const result2 = add2(15, 20);
const result3 = add3(10, 20);
const result4 = add4(10, 20);
console.log(result, result2, result3, result4);
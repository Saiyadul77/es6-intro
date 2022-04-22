const add = (num1, num2) => num1 + num2;
const result = add(3, 5);
console.log(result);
// multiple input must be used bracked
const input = (num1, num2, num3) => num1 + num2 + num3;
const result2 = input(5, 7, 8);
console.log(result2)
// single input with or without bracket 
const num = num => num * 10;
const result3 = num(10);
console.log(result3);
// multi line sum
const value = (num1, num2) => {
    const value1 = num1 + num2;
    const diff = num1 - num2;
    const result = value1 * diff;
    return result;
}
const inputvalue = value(10, 7)
console.log(inputvalue)
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    let operations = 0;
    for (;;) {
        if (num1 <= 0 || num2 <= 0) {
            break;
        }
        
        if (num1 >= num2) {
            num1 -= num2; 
        } else {
            num2 -= num1; 
        }
        operations++; 
    }
    
    return operations;
};
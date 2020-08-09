
var runningSum = function(nums) {
    let total = 0;
    return nums.map( i => (total += i ))
};

const testCase = [ 1, 2, 3, 4 ];
console.log('Input: ', testCase);
console.log('Expected Output: ', [1, 3, 6, 10]);
console.log('Output: ', runningSum(testCase));

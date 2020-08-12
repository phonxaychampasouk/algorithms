/*
given an array... return all elements n/3 times.

Example 1:
    Input: [3,2,3]
    Output: [3]

Example 2:
    Input: [1,1,1,3,3,2,2,2]
    Output: [1,2]



****

i= array[integars]
o= array[integars] === n/3
c= always has majority numbers, will always be filled with integar values, no null values
e= 
*/

var majorityElement = function(nums) {
    let third = Math.floor(nums.length/3);
    let results = [];
    let objHolder = {};
        for( let i = 0; i < nums.length; i += 1 ){
        if(objHolder[nums[i]]){
            helperFunc(objHolder, nums[i])
            }
        else {
            let numsValue = nums[i];
            objHolder[numsValue] = 1;
        }   
    }
        for (const key in objHolder) {
            if ( objHolder[key] > third ) {
            results.push(parseInt(key));
            }
        }
return results;
}
    
    const helperFunc = (objHolder, key ) => {
        objHolder[key] = objHolder[key] += 1;
        }

let input = [1,1,1,3,3,2,2,2]
console.log('input: ', input );
console.log('output: ',majorityElement(input));
console.log('expected: ', [1 , 2]);

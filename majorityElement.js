
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var majorityElement = function(nums) {
    const third = nums.length/3;
    nums.sort((a,b)=>(a - b));
    let results = [];
    for(let i = 0; i < nums.length; i +=1){
        let last = nums.lastIndexOf(nums[i]);
        let total = last - i + 1;
        if(total > third){
            results.push(nums[i]);
            if(results.length === 2){
                return results;
            }
        }
        i = last;
    }
    return results;
    };
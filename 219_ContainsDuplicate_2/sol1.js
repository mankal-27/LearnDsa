/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const window = new Map();
    for(let i = 0 ; i < nums.length; i++){
        console.log("first", window)
        console.log("second", window.get(nums[i]))
        if(i-window.get(nums[i]) <= k){
            return true
        }
        window.set(nums[i], i)
    }
    
    return false
};

console.log(containsNearbyDuplicate([1,2,2,1],3))
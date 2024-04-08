/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(num) {
    const set = new Set();
    for(let i=0; i < num.length; i++){
        if(set.has(num[i])){
            return true
        }
        set.add(num[i]);
    }
    return false
}
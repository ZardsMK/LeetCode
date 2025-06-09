var singleNumber = function(nums) { //meu
    
    if (nums.length == 1) return nums[0];
    
    let res = {}, val;
    
    
    for(let i in nums){
        val = nums[i];
        if(res[val]) {
            delete res[val];
        } else {
            res[val] = 1;
        }
        
    }
    
    return parseInt(Object.keys(res)[0]);
};

var singleNumber = function(nums) { //chat
    let result = 0;

    for (let num of nums) {
        result ^= num; 
    }

    return result;
};

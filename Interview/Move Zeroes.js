var moveZeroes = function(nums) {// meu
    
    let tam = nums.filter(num => num !== 0)
    
    let val = nums.length - tam.length;
    
    tam.push(...Array(val).fill(0));
    
    for(let i = 0; i < nums.length; i++) {
        nums[i] = tam[i];
    }
    return;
    
};

var moveZeroes = function(nums) { // chat
    let pos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos] = nums[i];
            pos++;
        }
    }

    while (pos < nums.length) {
        nums[pos] = 0;
        pos++;
    }
}

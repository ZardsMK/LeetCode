var rotate = function(nums, k) { //meu
    let i, arr = [];
    
    if (nums.length === k) return;
    if (k > nums.length) k = k % nums.length;
    
    for(i = 0; i < k; i++) {
        arr[i] = nums[nums.length - (k - i)];
        
    }
    
    for(i = 0; i < (nums.length - k); i++){
        arr.push(nums[i]);
    }
    
    nums.length = 0;
    
    for(i in arr){
        nums[i] = arr[i];
    }
};

var rotate = function(nums, k) { //chat
    k = k % nums.length;

    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
};

// Idéia:
// Inverta o array inteiro.
// Inverta os primeiros k elementos.
// Inverta os elementos de k até o fim.

// Tempo: O(n)
// Espaço: O(1) in-place
// Leitura: Simples com uma função reverse.

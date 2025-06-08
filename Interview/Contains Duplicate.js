var containsDuplicate = function(nums) { // meu
    let i, val;
    if(nums.length < 2) return false;
    
    nums.sort();
    val = nums[0]
    for(i = 1; i <= nums.length; i++) {
        if(val == nums[i]) return true;
        val = nums[i];
    }
    
    return false;
};

ar containsDuplicate = function(nums) { // chat
    let seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// Explicação:
// Um Set só guarda valores únicos.
// Ao iterar:
// Se o valor já existe no Set, é duplicado → retorna true.
// Se não, adiciona no Set.

// Complexidade:
// Tempo: O(n) (melhor que seu O(n log n))
// Espaço extra: O(n) (usado pelo Set)

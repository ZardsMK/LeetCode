var twoSum = function(nums, target) {// meu
    let res = [];
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let x = i + 1; x < nums.length; x++){
            if(nums[i] + nums[x] === target) res.push(i,x);
        }
    }
    return res;
};

for (let i = 0; i < nums.length; i++) { // chat
    let complemento = target - nums[i];

    if (map[complemento] !== undefined) {
        return [map[complemento], i];
    }

    map[nums[i]] = i;
}

// Complexidade
// Tempo: O(n) → percorre o array 1 vez
// Espaço: O(n) → pode guardar até n elementos no objeto

// Para cada número nums[i], ele:
// Calcula o complemento: target - nums[i]
// Procura esse complemento no map
// Se já está lá, é porque já vimos ele antes → pronto! achamos os dois.
// Se ainda não está, salva o número atual e seu índice no map.


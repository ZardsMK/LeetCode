var rotate = function(matrix) { // meu
    let i, k, tam = matrix.length;
    
    for(i = 0; i < (tam / 2); i++) {
        [matrix[i], matrix[tam - 1 - i]] = [matrix[tam - 1 - i], matrix[i]];
    }
    
    for(i = 0; i < (tam - 1); i++){
        for(k = i + 1; k < tam ; k++){
            [matrix[i][k], matrix[k][i]] = [matrix[k][i], matrix[i][k]];

        }
    }
};

var rotate = function(matrix) { // chat
    const n = matrix.length;

    // Passo 1: inverter a matriz verticalmente
    for (let i = 0; i < Math.floor(n / 2); i++) {
        [matrix[i], matrix[n - 1 - i]] = [matrix[n - 1 - i], matrix[i]];
    }

    // Passo 2: transpor a matriz (trocar matrix[i][j] com matrix[j][i])
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
};

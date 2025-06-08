var maxProfit = function(prices) { // meu

    let i, k, res = 0;
    let at = null, pr, ma;
    
    for(i = 0; i < prices.length; i++){
        
        if (i < prices.length){
            if( prices[i] > prices[i + 1] ) continue;
            if (at === null) at = prices[i];

            k = i + 1;
            pr = prices[k];
            ma = prices[k + 1];
            if(pr > ma) {
                res += pr - at;
                at = null;
                i = k;
            }
        }

        if(at !== null && i == prices.length - 1) res += prices[i] - at;
    }
        
    return res;
};


var maxProfit = function(prices) { // chat
    let profit = 0; 

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }

    return profit;
};

// Explicação:
// A ideia é não tentar prever os melhores pontos de compra/venda.
// Se hoje o preço subiu em relação a ontem, isso é um lucro garantido (desde que você tivesse comprado ontem e vendido hoje).
// Esse comportamento é repetido para cada par de dias, acumulando os pequenos lucros.

// Vantagens dessa abordagem:
// Muito mais legível e simples.
// Eficiência: O(n), percorre o array apenas uma vez.
// Zero complexidade extra (sem necessidade de variáveis como at, ma, k, etc.).

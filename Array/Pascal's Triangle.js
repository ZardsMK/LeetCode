var generate = function(numRows) {
    let i, j, arrF = new Array(numRows);
    for(i = 1; i <= numRows; i++){
        arrF[i - 1] = new Array(i);
        arrF[i - 1].fill(1);
    }
    
    for(i = 2; i < numRows; i++){
        for(j = 1; j < (arrF[i].length - 1); j++){
            arrF[i][j] = (arrF[i - 1][j - 1]) + (arrF[i - 1][j]);
        }
    }

    return arrF;
};

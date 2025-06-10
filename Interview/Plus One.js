var plusOne = function(digits) { // meu
    let myText = '';
    digits = digits.map(item => item.toString());

    for (const i in digits){
        myText += digits[i];
    }

    myText = (BigInt(myText) + BigInt(1)).toString().split('');

    myText = myText.map(item => parseInt(item, 10));
    return myText;
};

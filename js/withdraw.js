/*

1. add event handler to the withdraw button

2. get the withdraw input value by using getInputFieldValueByID() function

3. get previous withdraw amount by using getTextElementValueByID() function
4. calculate new withdraw total 
4-5. set new withdraw total by using setTextElementValueByID() function

5. get previous balance total by using getTextElementValueByID() function
6. calculate new balance total 
6-5. set new balance total by using setTextElementValueByID() function

*/

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const inputNewWithdrawAmount = getInputFieldValueByID('withdraw-field');

    const previousWithdrawTotal = getTextElementValueByID('withdraw-total');
    const newWithdrawAmount = inputNewWithdrawAmount + previousWithdrawTotal;
    setTextElementValueByID('withdraw-total', newWithdrawAmount);

    const previousBalanceTotal = getTextElementValueByID('balance-total');
    const newBalanceTotal = previousBalanceTotal - inputNewWithdrawAmount;
    setTextElementValueByID('balance-total', newBalanceTotal);
})
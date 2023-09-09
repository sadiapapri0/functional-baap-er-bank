// DRY: Do not Repeat Yourself

// step-1
document.getElementById('btn-deposit').addEventListener('click', function () {
    /*
    1. get the input element by id
    2. get the input value from the input element
    3. convert string value to a number
    */

    // step-2
    const inputNewDepositAmount = getInputFieldValueByID('deposit-field');

    // step-3
    const previousDepositAmount = getTextElementValueByID('deposit-total');

    // calculate new deposit total:
    const newDepositTotal = inputNewDepositAmount + previousDepositAmount;
    // set deposit total value:
    setTextElementValueByID('deposit-total', newDepositTotal);

    // step-4
    const previousBalanceTotal = getTextElementValueByID('balance-total');
    const newBalanceTotal = inputNewDepositAmount + previousBalanceTotal;
    setTextElementValueByID('balance-total', newBalanceTotal);
})
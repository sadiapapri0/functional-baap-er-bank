function getInputFieldValueByID(inputFieldID) {
    const inputField = document.getElementById(inputFieldID);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueByID(elementID) {
    const textElement = document.getElementById(elementID);
    const previousElementValueString = textElement.innerText;
    const previousValue = parseFloat(previousElementValueString);
    return previousValue;
}

function setTextElementValueByID(elementID, newValue) {
    const textElement = document.getElementById(elementID);
    textElement.innerText = newValue;
}
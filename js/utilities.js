function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  // console.log(inputFieldValue);
  inputField.value = "";
  // check validation
  if (isNaN(inputFieldValue) || inputFieldValue < 0){
    alert('Please type a valid amount')
    return 0;
  }else{
    return inputFieldValue;
  }
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  // console.log(textElementValue)
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

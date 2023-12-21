const display = document.getElementById("display");

const appendToDisplay = (value) => {
  display.value += value;
};

const clearDisplay = () => {
  display.value = "";
};
const deleteLastValue = () => {
  const currentValue = display.value;
  display.value = currentValue.slice(0, -1);
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
};

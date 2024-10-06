function add(number1, number2) {
    return number1 + number2;
  }
  
  function sub(number1, number2) {
    return number1 - number2;
  }
  
  function multi(number1, number2) {
    return number1 * number2;
  }
  
  function divide(number1, number2) {
    if (number2 === 0) {
      return "Error: Division by zero is not allowed.";
    }
    return number1 / number2;
  }
  
  // Helper function to get input values and display result
  function calculate(operation) {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    let result;
  
    switch (operation) {
      case 'add':
        result = add(number1, number2);
        break;
      case 'subtract':
        result = sub(number1, number2);
        break;
      case 'multiply':
        result = multi(number1, number2);
        break;
      case 'divide':
        result = divide(number1, number2);
        break;
      default:
        result = "Invalid operation.";
    }
  
    document.getElementById("calculation-result").textContent = result;
  }
  
  let addBtn = document.getElementById("add");
  let subBtm = document.getElementById("subtract");
  let MultiBtm = document.getElementById("multiply");
  let divideBtm = document.getElementById("divide");
  
  addBtn.addEventListener("click", () => calculate('add'));
  subBtm.addEventListener("click", () => calculate('subtract'));
  MultiBtm.addEventListener("click", () => calculate('multiply'));
  divideBtm.addEventListener("click", () => calculate('divide'));
  
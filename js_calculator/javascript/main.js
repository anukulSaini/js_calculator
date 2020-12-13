var display = document.getElementById('display');
var numbers = [];
var digits = [];
var total = 0;
var operation;

function add(number){
  total += number;
  return total;
}

function subtract(number){
  total = Math.abs(total) - number;
  return total;
}

function multiply(number){
  return performOperation("*", number);
}

function divide(number){
  return performOperation("/", number);
}

function performOperation(operator, number){
  if (total === 0) {
    total = numbers[0];
  } else if (number === 0){
    numbers.pop();
  } else {
    total = eval(total + operator + number);
  }
  return total;
}

function calculate(numbers){
  if (operation === "+"){
    return add(numbers[numbers.length-1]);
  }else if (operation === "-"){
    return subtract(numbers[numbers.length-1]);
  }else if (operation === "x"){
    return multiply(numbers[numbers.length-1]);
  }else if (operation === "÷"){
    return divide(numbers[numbers.length-1]);
  }
}

$('a').on('click', function() {
 	var request = $(this).text();
  if (!isNaN(request)){
    var number = Number(request);
    digits.push(number);
    display.value = Number(digits.join(""));
  } else if (request === "="){
    $('.equal').on('click', function(){
      numbers.push(Number(digits.join("")));
      digits = [];
      calculate(numbers);
      display.value = total;
    });
  } else if(request === "C" || request === "AC"){
      numbers = [];
      digits = [];
      total = 0;
      display.value = total;
  } else {
      operation = request;
      numbers.push(Number(digits.join("")));
      digits = [];
      calculate(numbers);
      display.value = total;
  }
});

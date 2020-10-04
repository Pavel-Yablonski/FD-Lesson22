let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operation");
let decimal = document.querySelector(".decimal");
let cancel = document.getElementById("cancel");
let display = document.getElementById("display");
let currentNumber = 0;
let newNumber = false;
let newOperation = "";

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    num.addEventListener("click", function(element) {
        numberBtn(element.target.innerText);
    });
}

for (let i = 0; i < operations.length; i++) {
    let op = operations[i];
    op.addEventListener("click", function(element) {
        operationBtn(element.target.innerText);
    });
}

decimal.addEventListener("click", decimalBtn);
cancel.addEventListener("click", cancelBtn);


function numberBtn(num) {
    if (newNumber) {
        display.value = +num;
        newNumber = false;
    } else {
        if (display.value === "0") {
            display.value = num;
        } else {
            display.value += num;
        }
    }
}

function operationBtn(op) {
    let operationMemmory = display.value;

    if (newNumber && newOperation !== "=") {
        display.value = currentNumber;
    } else {
        newNumber = true;
        if (newOperation === "+") {
            currentNumber += +operationMemmory;
        } else if (newOperation === "-") {
            currentNumber -= +operationMemmory;
        } else if (newOperation === "х") {
            currentNumber *= +operationMemmory;
        } else if (newOperation === "/") {
            currentNumber /= +operationMemmory;
        } else {
            currentNumber = +operationMemmory;
        }

        display.value = currentNumber;
        newOperation = op;
    }
}

function decimalBtn(decimal) {
    let decimalMemmory = display.value;

    if (newNumber) {
        decimalMemmory = "0.";
        newNumber = false;
    } else {
        if (decimalMemmory.indexOf(".") === -1) {
            decimalMemmory += ".";
        }
    }

    display.value = decimalMemmory;
}

function cancelBtn(cancel) {
    display.value = "0";
    currentNumber = 0;
    newNumber = true;
    newOperation = "";
}

// get values from ui
function getValues(){
    let startVal = parseInt(document.getElementById("startVal").value);
    let endVal = parseInt(document.getElementById("endVal").value);
    if (!Number.isInteger(startVal) || !Number.isInteger(endVal)) {
        alert("You must enter only Integers into both fields.")
    }
    let numbers = generateNumbers(startVal,endVal);
    displayResults(numbers);
}

// generate numbers from start value to ending value
function generateNumbers(startVal,endVal){
    let numbers = [];
    for (let i = startVal; i < endVal+1; i++) {
        numbers.push(i);
    }
    return numbers;
}

//display the generated numbers, even numbers bold per challenge
function displayResults(numbers){
    let tableRow ="";
    numbers.forEach(element => {
        if (element % 2 === 0 && element != 0) {
        tableRow += `<tr><td><b>${element}</b></td></tr>`;
        }
        else{
        tableRow += `<tr><td>${element}</td></tr>`;
        }
    });
    document.getElementById("results").innerHTML = tableRow
}

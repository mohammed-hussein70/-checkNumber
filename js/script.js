function generateTable() {
  let table = document.querySelector(".table");

  let input = document.querySelector(".myInput").value.trim();
  inputValue = input.replace(/\s+/g, "");
  let numberArray = inputValue.split().map(Number);

  for (let i = 0; i < numberArray.length; i++) {
    // create Element
    let tr = document.createElement("tr");
    (evenCell = document.createElement("td")),
      (oddCell = document.createElement("td"));

    if (numberArray[i] % 2 === 0) {
      evenCell.textContent = numberArray[i];
    } else {
      oddCell.textContent = numberArray[i];
    }
    // check of input Value
    if (isNaN(inputValue[i])) {
      document.querySelector("p").innerHTML = " please inter number";
      return;
    } else {
      // append Element to table
      document.querySelector("p").innerHTML = "";
      tr.appendChild(evenCell);
      tr.appendChild(oddCell);
      table.appendChild(tr);
    }
    document.querySelector(".myInput").value = "";
  }
}
document.querySelector(".check").addEventListener("click", generateTable);

'use strict';

let foodarray = window.localStorage.getItem("foodarr");
foodarray = JSON.parse(foodarray);

function render() {
    for (let i = 0; i < foodarray.length; i++) {
        let foodTable = document.getElementById('foodTable');
        let fheader = document.createElement('tr');
        foodTable.appendChild(fheader);
        let fId = document.createElement('td');
        fheader.appendChild(fId)
        let fName = document.createElement('td');
        fheader.appendChild(fName);
        let fType = document.createElement('td');
        fheader.appendChild(fType);
        let fPrice = document.createElement('td');
        fheader.appendChild(fPrice);

        fId.textContent = foodarray[i].id;
        fName.textContent = foodarray[i].name;
        fType.textContent = foodarray[i].type;
        fPrice.textContent = foodarray[i].price;
    }
}

render();

//method to render food in table
let table = document.getElementById('foodTable');

let thead = document.createElement("thead");
let headerRow = document.createElement("tr");
let headerCell1 = document.createElement("th");
headerCell1.textContent = "FOOD ID";
headerRow.appendChild(headerCell1);

let headerCell2 = document.createElement("th");
headerCell2.textContent = "FOOD NAME";
headerRow.appendChild(headerCell2);

let headerCell3 = document.createElement("th");
headerCell3.textContent = "FOOD TYPE";
headerRow.appendChild(headerCell3);

let headerCell4 = document.createElement("th");
headerCell4.textContent = "FOOD PRICE";
headerRow.appendChild(headerCell4);

thead.appendChild(headerRow);
table.appendChild(thead);


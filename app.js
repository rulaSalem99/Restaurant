'use strict';


function Food(id, name, type, price) {
  this.id = id;
  this.name = name;
  this.type = type;
  this.price = price;

};

Food.prototype.generateId = function () {
  let randomNumber = Math.floor(Math.random() * 9000) + 1000;
  return randomNumber;
};

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

Food.prototype.render = function () {

  //create row
  let row = document.createElement('tr');

  //create cells in table and append in row
  //food id
  let idCell = document.createElement('td');
  idCell.textContent = this.id;
  row.appendChild(idCell);

  //food name
  let nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  row.appendChild(nameCell);

  //food type
  let typeCell = document.createElement('td');
  typeCell.textContent = this.type;
  row.appendChild(typeCell);

  //food price
  let priceCell = document.createElement('td');
  priceCell.textContent = this.price;
  row.appendChild(priceCell);

  //append row to table
  table.appendChild(row);

};

//event listner
document.getElementById('foodForm').addEventListener('submit', function (event) {
  event.preventDefault();

  //get values from form
  let foodName = document.getElementById('foodName').value;
  let foodType = document.getElementById('foodType').value;
  let foodPrice = document.getElementById('price').value;

  //new food
  let foodId = new Food().generateId();
  let food = new Food(foodId, foodName, foodType, foodPrice);

  //render results in webpage table
  food.render();


});



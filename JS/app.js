'use strict';

let foodarr =[];
function Food(id, name, type, price) {
  this.id = id;
  this.name = name;
  this.type = type;
  this.price = price;

  foodarr.push(this);
};

Food.prototype.generateId = function () {
  let randomNumber = Math.floor(Math.random() * 9000) + 1000;
  return randomNumber;
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

//render
let jsonObject= JSON.stringify(foodarr);
    window.localStorage.setItem("foodarr",jsonObject);

});

let saveValues = document.getElementById('foodForm');
saveValues.addEventListener('submit', handler)




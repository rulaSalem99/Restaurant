'use strict';


function Food (id,name, type, price) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;

};

Food.prototype.generateId = function() {
    let randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return randomNumber;
  };

   //method to render food in table
     Food.prototype.render = function () {
       let table = document.getElementById('foodTable');

    //create row
       let row = document.createElement('tr');

       //create cells in table and append in row
       //food id
       let idCell=document.createElement('tr');
       idCell.textContent= this.id;
       row.appendChild(idCell);
      
     //food name
     let nameCell=document.createElement('tr');
     nameCell.textContent= this.name;
     row.appendChild(nameCell);

     //food type
     let typeCell=document.createElement('tr');
     typeCell.textContent= this.type;
     row.appendChild(typeCell);

     //food price
     let priceCell=document.createElement('tr');
     priceCell.textContent= this.price;
     row.appendChild(priceCell);

    //append row to table
    table.appendChild(row);

     };

   //event listner
     document.getElementById('foodForm').addEventListener('submit', function(event) {
     event.preventDefault();

      //get values from form
      let foodName=document.getElementById('foodName').value;
      let foodType=document.getElementById('foodType').value;
      let foodPrice=document.getElementById('price').value;

        //new food
        let foodId = new Food().generateId();
        let food=new Food (foodId,foodName,foodType,foodPrice);

    //render results in webpage table
    food.render();

   
   });



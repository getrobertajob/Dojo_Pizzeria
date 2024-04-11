console.clear();
let varCrustArr = ["Hand Tossed", "Deep Dish", "Thin Crust", "Stuffed Crust"];
let varCheeseArr = ["Mozzarella", "Feta", "Provalone", "Chedder", "Parmesan", "Fontina", "Cotija", "Somked Gouda"];
let varCheeseBtn = ["cheese1", "cheese2", "cheese3", "cheese4", "cheese5", "cheese6", "cheese7", "cheese8"];
let varToppingsArr = ["Pepperoni", "Sausage", "Conadian Bacon", "Peppers", "Onions", "Mushrooms", "Olives", "Pineapple"];
let varToppingsBtn = ["toppings1", "toppings2", "toppings3", "toppings4", "toppings5", "toppings6", "toppings7", "toppings8"];
function updatePizza() {
  let varCrustSauceFin = [];
  let varCheeseCheck = "";
  let varCheeseFin = [];
  let varToppingsCheck = "";
  let varToppingsFin = [];
  let varPizzaSummary = document.getElementById("pizzaSummary");
  varCrustSauceFin[0] = document.getElementById("selectCrust").value;
  varCrustSauceFin[1] = document.getElementById("selectSauce").value;
  for (i = 0; i < varCheeseArr.length; i++) {
    varCheeseCheck = document.getElementById(varCheeseBtn[i]);
    if (varCheeseCheck.checked) {
      varCheeseFin.push(varCheeseArr[i]);
    }
  }
  for (i = 0; i < varToppingsArr.length; i++) {
    varToppingsCheck = document.getElementById(varToppingsBtn[i]);
    if (varToppingsCheck.checked) {
      varToppingsFin.push(varToppingsArr[i]);
    }
  }
  varPizzaSummary.innerHTML = "<br><b>Crust:</b> " + varCrustSauceFin[0] + "<br><br> <b>Sauce:</b> " + varCrustSauceFin[1] + "<br><br> <b>Cheese:</b> " + varCheeseFin + "<br><br> <b>Cheese:</b> " + varToppingsFin;
}
function randomFunc() {
  document.getElementById("selectCrust").selectedIndex = Math.floor((Math.random() * document.getElementById("selectCrust").length));
  document.getElementById("selectSauce").selectedIndex = Math.floor((Math.random() * document.getElementById("selectSauce").length));
  for (x = 0; x < varCheeseArr.length; x++) {
    document.getElementById(varCheeseBtn[x]).checked = Math.random() >= 0.5;
    document.getElementById(varToppingsBtn[x]).checked = Math.random() >= 0.5;
  }
  updatePizza();
}
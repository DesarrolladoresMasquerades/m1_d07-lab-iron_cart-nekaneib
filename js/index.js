// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").innerText
  const quantity = product.querySelector(".quantity input").value
  const subTotal = price * quantity

 const subTotalFinal = product.querySelector(".subtotal span")
 subTotalFinal.innerText = subTotal
 return subTotal;
}

function calculateAll() {
  // ITERATION 2
  /*
  const allArray = Array.from(document.getElementsByClassName("product"));

  allArray.forEach((element) => {
    updateSubtotal(element)
  });
  */
  // ITERATION 3
  const allArray = Array.from(document.getElementsByClassName("product"));
  let counter = 0
  allArray.forEach((element) => {
   counter += updateSubtotal(element)
}) 
let totalFinal = document.querySelector("#total-value span");
totalFinal.innerText = counter
return counter
}
/*
  const allArrayAll = Array.from(document.querySelectorAll("subtotal span").innerText);

  let totalPrice = document.querySelector("#total-value span")
  = allArrayAll.forEach((element) => {
    += element } */


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
 const buttons = document.getElementsByClassName("btn btn-remove")
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

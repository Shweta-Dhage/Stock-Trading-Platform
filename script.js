let balance = 10000;

let CISCO = 0;
let GOOGLE = 0;
let AMAZON = 0;
let MICROSOFT = 0;

let ciscoPrice = 1500;
let googlePrice = 3200;
let amazonPrice = 450;
let microsoftPrice = 2800;

let transactions = [];

function saveData() {
  localStorage.setItem("balance", balance);         
  localStorage.setItem("CISCO", CISCO);              
  localStorage.setItem("GOOGLE", GOOGLE);            
  localStorage.setItem("AMAZON", AMAZON);            
  localStorage.setItem("MICROSOFT", MICROSOFT);      
  localStorage.setItem("transactions", JSON.stringify(transactions)); 
  localStorage.setItem("name", document.getElementById("welcome").innerText); 
}

function loadData() {
  if (localStorage.getItem("balance")) {
    balance = Number(localStorage.getItem("balance"));       
    CISCO = Number(localStorage.getItem("CISCO"));           
    GOOGLE = Number(localStorage.getItem("GOOGLE"));         
    AMAZON = Number(localStorage.getItem("AMAZON"));         
    MICROSOFT = Number(localStorage.getItem("MICROSOFT"));   
    transactions = JSON.parse(localStorage.getItem("transactions")) || []; 
    document.getElementById("welcome").innerText = localStorage.getItem("name"); 
  }
}

function saveName() {
  let name = document.getElementById("username").value;   
  document.getElementById("welcome").innerText = "Welcome, " + name + " 👋";
  saveData(); 
}

function updateUI() {
  document.getElementById("balance").innerText = balance;       
  document.getElementById("qty-CISCO").innerText = CISCO;       
  document.getElementById("qty-GOOGLE").innerText = GOOGLE;     
  document.getElementById("qty-AMAZON").innerText = AMAZON;    
  document.getElementById("qty-MICROSOFT").innerText = MICROSOFT; 

  let ul = document.getElementById("transactions");
  ul.innerHTML = ""; 
  for (let i = 0; i < transactions.length; i++) {
    let li = document.createElement("li");
    li.innerText = transactions[i];
    ul.appendChild(li);
  }
}

function addTransaction(msg) {
  transactions.push(msg); 
  updateUI();             
  saveData();             
}

function buy(stock) {

  if (stock === "CISCO") {
    if (balance >= ciscoPrice) {
      balance = balance - ciscoPrice; 
      CISCO = CISCO + 1;             
      addTransaction("Bought CISCO");
      alert("Bought CISCO");
    } else {
      alert("Not enough balance");
    }
  }

  if (stock === "GOOGLE") {
    if (balance >= googlePrice) {
      balance = balance - googlePrice;
      GOOGLE = GOOGLE + 1;
      addTransaction("Bought GOOGLE");
      alert("Bought GOOGLE");
    } else {
      alert("Not enough balance");
    }
  }

  if (stock === "AMAZON") {
    if (balance >= amazonPrice) {
      balance = balance - amazonPrice;
      AMAZON = AMAZON + 1;
      addTransaction("Bought AMAZON");
      alert("Bought AMAZON");
    } else {
      alert("Not enough balance");
    }
  }

  if (stock === "MICROSOFT") {
    if (balance >= microsoftPrice) {
      balance = balance - microsoftPrice;
      MICROSOFT = MICROSOFT + 1;
      addTransaction("Bought MICROSOFT");
      alert("Bought MICROSOFT");
    } else {
      alert("Not enough balance");
    }
  }

  updateUI();
  saveData();
}

function sell(stock) {

  if (stock === "CISCO") {
    if (CISCO > 0) {
      CISCO = CISCO - 1;          
      balance = balance + ciscoPrice; 
      addTransaction("Sold CISCO");
      alert("Sold CISCO");
    } else {
      alert("No CISCO to sell");
    }
  }

  if (stock === "GOOGLE") {
    if (GOOGLE > 0) {
      GOOGLE = GOOGLE - 1;
      balance = balance + googlePrice;
      addTransaction("Sold GOOGLE");
      alert("Sold GOOGLE");
    } else {
      alert("No GOOGLE to sell");
    }
  }

  if (stock === "AMAZON") {
    if (AMAZON > 0) {
      AMAZON = AMAZON - 1;
      balance = balance + amazonPrice;
      addTransaction("Sold AMAZON");
      alert("Sold AMAZON");
    } else {
      alert("No AMAZON to sell");
    }
  }

  if (stock === "MICROSOFT") {
    if (MICROSOFT > 0) {
      MICROSOFT = MICROSOFT - 1;
      balance = balance + microsoftPrice;
      addTransaction("Sold MICROSOFT");
      alert("Sold MICROSOFT");
    } else {
      alert("No MICROSOFT to sell");
    }
  }

  updateUI();
  saveData();
}

function resetAccount() {
  localStorage.clear(); 
  balance = 10000;
  CISCO = 0;
  GOOGLE = 0;
  AMAZON = 0;
  MICROSOFT = 0;
  transactions = [];
  document.getElementById("transactions").innerHTML = "";
  document.getElementById("welcome").innerText = "";
  document.getElementById("username").value = "";
  updateUI();
  alert("Account reset");
}

loadData();
updateUI();

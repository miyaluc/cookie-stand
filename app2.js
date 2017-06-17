'use strict';

var hoursOpen = ['06:00am', '07:00am', '08:00am', '09:00am', '10:00am', '11:00am', '12:00pm', '01:00pm', '02:00pm', '03:00pm', '04:00pm', '05:00pm', '06:00pm', '07:00pm', '08:00pm']
var allTheStores = [];

//creating object literals
function Store(name, minCust, maxCust, avgCookiesSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesSale = avgCookiesSale;
  this.hourlySales = [];
  allTheStores.push(this);
}
//too many tables, how to make rows more dynamic?
//function to push hours onto

var tableEl = document.getElementById('table');
var tableBodyEl = document.createElement('tbody');
tableEl.appendChild(tableBodyEl);

function makeHeader() {
  var headerEl = document.createElement('thead');
  tableEl.appendChild(headerEl);

  var locationEl = document.createElement('th');
  locationEl.textContent = 'Store Locations';
  headerEl.appendChild(locationEl);

  for (var i = 0; i < hoursOpen.length; i++) {
     var hoursOpenDataEl = document.createElement('th');
     hoursOpenDataEl.textContent = hoursOpen[i];
     headerEl.appendChild(hoursOpenDataEl);
  }
}

function makeRow(store) {
  var newRowEl = document.createElement('tr');
  tableBodyEl.appendChild(newRowEl);

  var dataEl = document.createElement('td');
  dataEl.textContent = store.name;
  newRowEl.appendChild(dataEl);

  for (var i = 0; i < store.hourlySales.length; i++) {
    var avgCookiesSaleDataEl = document.createElement('td');
    avgCookiesSaleDataEl.textContent = store.hourlySales[i];
    newRowEl.appendChild(avgCookiesSaleDataEl);
  }
}

var pike = new Store('1st and Pike', 23, 65, 6.5);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new Store('Seattle Center', 11, 38, 3.7);
var theHill = new Store('Capital Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var randomNum = function(store) {
  return Math.floor(Math.random() * (store.maxCust - store.minCust + 1) + store.minCust);
}

var genHourlySales = function(store) {
  for (var i = 0; i < hoursOpen.length; i++) {
    store.hourlySales.push(randomNum(store) * Math.floor(store.avgCookiesSale));
  }
  console.log(store.hourlySales)
}

makeHeader();

for (var i = 0; i < allTheStores.length; i++) {
  genHourlySales(allTheStores[i]);
  makeRow(allTheStores[i]);
}

//starting the event listener for form element
var formEl = document.getElementById('form');

formEl.addEventListener('submit', fancyStoreSubmit);

function fancyStoreSubmit(event) {
  //preventDefault prevents page from loading and refreshing
  event.preventDefault();
  console.log(event.target.newName.value);

  var newName = event.target.newName.value;
  var newMinCust = event.target.newMinCust.value;
  var newMaxCust = event.target.newMaxCust.value;
  var newAvgCookiesSale = event.target.newAvgCookiesSale.value;

  var newStore = new Store(newName, newMinCust, newMaxCust, newAvgCookiesSale);
  
  genHourlySales(newStore);
  makeRow(newStore);
}

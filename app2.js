'use strict';

var hoursOpen = ['06:00am', '07:00am', '08:00am', '09:00am', '10:00am', '11:00am', '12:00pm', '01:00pm', '02:00pm', '03:00pm', '04:00pm', '05:00pm', '06:00pm', '07:00pm', '08:00pm']
var allTheStores = [];

//creating object literals
function Store(name, minCust, maxCust, avgCookiesSale, hoursOpen) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesSale = avgCookiesSale;
  this.hoursOpen = hoursOpen;
  this.hourlySales = [];
  allTheStores.push(this);
}

var tableEl = document.getElementById('table');
var tableBodyEl = document.createElement('tbody');
var newRowEl = document.createElement('tr');
var DataEl = document.createElement('td');
tableEl.appendChild(tableBodyEl);

function makeRow(store) {
  newRowEl.appendChild(tableBodyEl)

  DataEl.textContent = store.name;
  newRowEl.appendChild(DataEl);

  var hoursOpenDataEl = document.createElement('td');
  hoursOpenDataEl.textContent = store.hoursOpen;
  newRowEl.appendChild(hoursOpenDataEl);

  var avgCookiesSaleDataEl = document.createElement('td');
  avgCookiesSaleDataEl.textContent = store.avgCookiesSale;
  newRowEl.appendChild(avgCookiesSaleDataEl);

  newRowEl.appendChild(tableBodyEl);
  document.write(table);
}
//tableBodyEl.appendChild(table);

var pike = new Store('1st and Pike', 23, 65, 6.5, hoursOpen);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2, hoursOpen);
var seaCenter = new Store('Seattle Center', 11, 38, 3.7, hoursOpen);
var theHill = new Store('Capital Hill', 20, 38, 2.3, hoursOpen);
var alki = new Store('Alki', 2, 16, 4.6, hoursOpen);

var randomNum = function(store) {
  return Math.floor(Math.random() * (store.maxCust - store.minCust + 1) + store.minCust);
}

var genHourlySales = function(store) {
   for (var i = 0; i < store.hoursOpen.length; i++) {
     store.hourlySales.push(randomNum(store) * store.avgCookiesSale);
   }//this is storing data in the function and not in the object, won't stick around, figure that out (maybe create an array within constructor object)
 }

// loop through entire allTheStores object, containing Stores.
for (var i = 0; i < allTheStores.length; i++) {
  // allTheStores[i].name;
  // var thisStoreHourlySales = genHourlySales(allTheStores[i]);
  // thisStoreHourlySales;

  // Print out a row (tr) for this store
  makeRow(allTheStores[i]);

}

//is not being stored in constructor object
//genHourlySales(loc1stAndPike);

  //allStores)

//console.log(genHourlySales(loc1stAndPike));
//console.log(loc1stAndPike);

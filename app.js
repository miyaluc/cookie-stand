'use strict';

//creating object literals

var loc1stAndPike = {
  minCustHourly: 23,
  maxCustHourly: 65,
  avgCookiesPerCust: 6.3,
}

for (var i = 600; i <= 2000; i+=100) {
  var randomNum = Math.floor((Math.random() * (loc1stAndPike.maxCustHourly - loc1stAndPike.minCustHourly +1)) + loc1stAndPike.minCustHourly);{
  randomNum++;
  }
  if (i < 1000) {
    console.log('1st and Pike 0' + i + ': ' + randomNum);
  } else {
    console.log('1st and Pike ' + i + ': ' + randomNum);
  }
}


var locSeaTacAirport = {
  minCustHourly: 3,
  maxCustHourly: 24,
  avgCookiesPerCust: 1.2,
}

for (var i = 600; i <= 2000; i+=100) {
  var randomNum = Math.floor((Math.random() * (locSeaTacAirport.maxCustHourly - locSeaTacAirport.minCustHourly +1)) + locSeaTacAirport.minCustHourly);{
  randomNum++;
  }
  if (i < 1000) {
    console.log('SeaTac Airport 0' + i + ': ' + randomNum);
  } else {
    console.log('SeaTac Airport ' + i + ': ' + randomNum);
  }
}

var locSeattleCenter = {
  minCustHourly: 11,
  maxCustHourly: 38,
  avgCookiesPerCust: 3.7,
}

for (var i = 600; i <= 2000; i+=100) {
  var randomNum = Math.floor((Math.random() * (locSeattleCenter.maxCustHourly - locSeattleCenter.minCustHourly +1)) + locSeattleCenter.minCustHourly);{
  randomNum++;
  }
  if (i < 1000) {
    console.log('Seattle Center 0' + i + ': ' + randomNum);
  } else {
    console.log('Seattle Center ' + i + ': ' + randomNum);
  }
}

var locCapitalHill = {
  minCustHourly: 20,
  maxCustHourly: 38,
  avgCookiesPerCust: 2.3,
}

for (var i = 600; i <= 2000; i+=100) {
  var randomNum = Math.floor((Math.random() * (locCapitalHill.maxCustHourly - locCapitalHill.minCustHourly +1)) + locCapitalHill.minCustHourly);{
  randomNum++;
  }
  if (i < 1000) {
    console.log('Capital Hill 0' + i + ': ' + randomNum);
  } else {
    console.log('Capital Hill ' + i + ': ' + randomNum);
  }
}

var locAlki = {
  minCustHourly: 2,
  maxCustHourly: 16,
  avgCookiesPerCust: 4.6,
}

for (var i = 600; i <= 2000; i+=100) {
  var randomNum = Math.floor((Math.random() * (locAlki.maxCustHourly - locAlki.minCustHourly +1)) + locAlki.minCustHourly);{
  randomNum++;
  }
  if (i < 1000) {
    console.log('Alki 0' + i + ': ' + randomNum);
  } else {
    console.log('Alki ' + i + ': ' + randomNum);
  }
}

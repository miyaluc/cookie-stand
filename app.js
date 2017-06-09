'use strict';

//creating object literals

var loc1stAndPike = {
  minCustHourly: 23,
  maxCustHourly: 65,
  avgCookiesPerCust: 6.3,
}

var randomNum = Math.floor((Math.random() * (loc1stAndPike.maxCustHourly - loc1stAndPike.minCustHourly +1)) + loc1stAndPike.minCustHourly);
  console.log('1st and Pike: ' + randomNum);

var locSeaTacAirport = {
  minCustHourly: 3,
  maxCustHourly: 24,
  avgCookiesPerCust: 1.2,
}

var randomNum = Math.floor((Math.random() * (locSeaTacAirport.maxCustHourly - locSeaTacAirport.minCustHourly +1)) + locSeaTacAirport.minCustHourly);
  console.log('SeaTac Airport ' + randomNum);

var locSeattleCenter = {
  minCustHourly: 11,
  maxCustHourly: 38,
  avgCookiesPerCust: 3.7,
}

var randomNum = Math.floor((Math.random() * (locSeattleCenter.maxCustHourly - locSeattleCenter.minCustHourly +1)) + locSeattleCenter.minCustHourly);
  console.log('Seattle Center: ' + randomNum);

var locCapitalHill = {
  minCustHourly: 20,
  maxCustHourly: 38,
  avgCookiesPerCust: 2.3,
}

var randomNum = Math.floor((Math.random() * (locCapitalHill.maxCustHourly - locCapitalHill.minCustHourly +1)) + locCapitalHill.minCustHourly);
  console.log('Capital Hill: ' + randomNum);

var locAlki = {
  minCustHourly: 2,
  maxCustHourly: 16,
  avgCookiesPerCust: 4.6,
}

var randomNum = Math.floor((Math.random() * (locAlki.maxCustHourly - locAlki.minCustHourly +1)) + locAlki.minCustHourly);
  console.log('Alki: ' + randomNum);

let homeScoreContainer = document.querySelector(".home-score-container")
let awayScoreContainer = document.querySelector(".away-score-container")
let countHome = 0
let countAway = 0

// Home table
function incrementHomePlusOne() {
  if (countHome > 998 ) {
     return false;
  } else if (countHome += 1) {
    homeScoreContainer.textContent = countHome
  } 
}

function incrementHomePlusTwo() {
  if (countHome > 997) {
    return false;
 } else if (countHome += 2) {
   homeScoreContainer.textContent = countHome
 } 
}

function incrementHomePlusThree() {
  if (countHome > 996) {
    return false;
 } else if (countHome += 3) {
   homeScoreContainer.textContent = countHome
 } 
}

function incrementHomePlusFour() {
  if (countHome > 995) {
    return false;
 } else if (countHome += 4) {
   homeScoreContainer.textContent = countHome
 } 
}

function resetHomeBoard() {
  homeScoreContainer.textContent = 0
  countHome = 0
}

// Away table
function incrementAwayPlusOne() {
  if (countAway > 998 ) {
    return false;
 } else if (countAway += 1) {
   awayScoreContainer.textContent = countAway
 } 
}

function incrementAwayPlusTwo() {
  if (countAway > 997 ) {
    return false;
 } else if (countAway += 2) {
   awayScoreContainer.textContent = countAway
 } 
}

function incrementAwayPlusThree() {
  if (countAway > 996 ) {
    return false;
 } else if (countAway += 3) {
   awayScoreContainer.textContent = countAway
 } 
}

function incrementAwayPlusFour() {
  if (countAway > 995 ) {
    return false;
 } else if (countAway += 4) {
   awayScoreContainer.textContent = countAway
 } 
}

function resetAwayBoard() {
  awayScoreContainer.textContent = 0
  countAway = 0
}
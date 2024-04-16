
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let periodEl = document.getElementById("period-el")
let homefoulEl = document.getElementById("homefoul-el")
let guestfoulEl = document.getElementById("guestfoul-el")
let count = 0


function add1(){
  count += 1
  homeEl.textContent = count
  
}
function add2(){
  count += 2
  homeEl.textContent = count

}
function add3(){
  count += 3
  homeEl.textContent = count

}
function reset(){
  homeEl.textContent = 0
  count = 0
}

function add4(){
  count += 1
  guestEl.textContent = count

}
function add5(){
  count += 2
  guestEl.textContent = count

}
function add6(){
  count += 3
  guestEl.textContent = count

}
function reset2(){
  guestEl.textContent = 0
  count = 0
}

function add7(){
  count += 1
  periodEl.textContent = count

}
function reset3(){
  periodEl.textContent = 0
  count = 0
}

function add8(){
  count += 1
  homefoulEl.textContent = count

}
function reset4(){
  homefoulEl.textContent = 0
  count = 0
}

function add9(){
  count += 1
  guestfoulEl.textContent = count

}
function reset5(){
  guestfoulEl.textContent = 0
  count = 0
}
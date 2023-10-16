let homescoreEl = document.getElementById("home-score-el")
let guestscoreEl = document.getElementById("guest-score-el")
let score1El = document.getElementById("scorebtn1-el")
let score2El = document.getElementById("scorebtn2-el")
let score3El = document.getElementById("scorebtn3-el")

let countHome = 0
let countGuest = 0

function score1Home() {
    countHome +=1
    homescoreEl.textContent = countHome
    
}
function score2Home() {
    countHome +=2
    homescoreEl.textContent = countHome
    
}
function score3Home() {
    countHome +=3
    homescoreEl.textContent = countHome
    
}
function score1Guest() {
    countGuest +=1
    guestscoreEl.textContent = countGuest
    
}
function score2Guest() {
    countGuest +=2
    guestscoreEl.textContent = countGuest
    
}
function score3Guest() {
    countGuest +=3
    guestscoreEl.textContent = countGuest
    
}
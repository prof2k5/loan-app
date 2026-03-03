// _____________FIRST WAY TO DO IT____________

// console.log("Interest rate calculation");
// const clicks = document.getElementById("button");
// clicks.addEventListener("click", () => { 
//     let principal = Number(document.getElementById("principal").value);
//     const time = Number(document.getElementById("time").value);
//     const rate = Number(document.getElementById("rate").value);
//     console.log("Principal", principal) 
//     console.log("Time", time); 
//     console.log("Rate", rate);
//     const interestRate = principal * time * rate/100;
//     console.log("New Principal amount", principal+=interestRate);

// });

// ____________ANOTHER WAY TO DO IT____________________
// ___DECLARE ALL VARIABLES OUTSIDE THE EVENT LISTENER BUT GET THEIR VALUES IN EVENT LISTENER__
const tick = document.getElementById("button");
let principal = document.getElementById("principal");
let time = document.getElementById("time");
let rate = document.getElementById("rate");

tick.addEventListener("click", ()=> {
    principal = Number(principal.value);
    time = Number(time.value);
    rate = Number(rate.value);
    let iRate = principal * time * rate / 100;
    console.log("Amount Borrowed:", principal);
    console.log("Duration:", time, "Year(s)");
    console.log("AInterest Rate:", rate,"%");
    console.log("New Principal Amount is:", "=N=",principal += iRate);
})

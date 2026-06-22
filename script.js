let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function goTo(page) {
    window.location.href = page;
}

function goToCart() {
    window.location.href = "cart.html";
}
function revealOnScroll() {
    let elements = document.querySelectorAll(
        ".hero, .neo-hero, .container, .promo, .newsletter, .footer, .card, .product-card, .neo-section-title"
    );

    elements.forEach((element) => {
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", () => {
    document.querySelectorAll(
        ".hero, .neo-hero, .container, .promo, .newsletter, .footer, .card, .product-card, .neo-section-title"
    ).forEach((element) => {
        element.classList.add("reveal");
    });

    revealOnScroll();
});
function animateOnScroll() {
    const elements = document.querySelectorAll(".animate");

    elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

/* =========================
   SIGNUP
========================= */
function signup(){
    let user = document.getElementById("signupUser").value;
    let pass = document.getElementById("signupPass").value;

    if(user === "" || pass === ""){
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Account created successfully!");
    window.location.href = "login.html";
}

/* =========================
   LOGIN
========================= */
function login(){
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("pass");

    if(user === savedUser && pass === savedPass){
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Wrong username or password");
    }
}
function goTo(page) {
    window.location.href = page;
}
function goTo(page){
    window.location.href = page;
}
function subscribeEmail() {

    let email = document.getElementById("emailInput").value;

    if (email == "") {
        document.getElementById("subscribeMessage").innerHTML =
        "❌ Please enter an email!";
        return;
    }

    // Save email
    localStorage.setItem("newsletterEmail", email);

    document.getElementById("subscribeMessage").innerHTML =
    "✅ Thank you for subscribing!";

    document.getElementById("emailInput").value = "";
}
function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let message = document.getElementById("contactMessage").value;

    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    messages.push({
        name: name,
        email: email,
        message: message
    });

    localStorage.setItem("messages", JSON.stringify(messages));

    document.getElementById("messageStatus").innerHTML =
    "✅ Message sent successfully!";

    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactMessage").value = "";
}
function createTicket() {

let name = document.getElementById("ticketName").value;
let email = document.getElementById("ticketEmail").value;
let category = document.getElementById("ticketCategory").value;
let message = document.getElementById("ticketMessage").value;

if(name=="" || email=="" || message==""){
document.getElementById("ticketStatus").innerHTML =
"❌ Please fill all fields";
return;
}

let ticketID =
"RJ-" + Math.floor(Math.random()*100000);

let ticket = {
id: ticketID,
name: name,
email: email,
category: category,
message: message
};

let tickets =
JSON.parse(localStorage.getItem("tickets")) || [];

tickets.push(ticket);

localStorage.setItem(
"tickets",
JSON.stringify(tickets)
);

document.getElementById("ticketStatus").innerHTML =
"✅ Ticket Created Successfully! ID: " + ticketID;

}
function searchProducts(event){

let input = document.getElementById("searchInput");
let value = input.value.toLowerCase();
let products = document.querySelectorAll(".product-card");

/* ENTER KEY SUPPORT */
if(event && event.key === "Enter"){
event.preventDefault();
}

products.forEach(card => {

let title = card.querySelector("h3").innerText.toLowerCase();
let desc = card.querySelector(".desc").innerText.toLowerCase();

if(title.includes(value) || desc.includes(value)){
card.style.display = "block";
} else {
card.style.display = "none";
}

});

}
function openRedeem(){
document.getElementById("redeemOverlay").style.display = "flex";
document.querySelector(".redeem-box").classList.add("redeem-appear");
}

function closeRedeem(){
document.getElementById("redeemOverlay").style.display = "none";
}

// PREMIUM CODE SYSTEM
function checkCode(){

let input = document.getElementById("redeemInput").value.toUpperCase();
let result = document.getElementById("redeemResult");

let rewards = {
"RANA50": "🔥 50% DISCOUNT UNLOCKED",
"GAMER10": "🎮 10% DISCOUNT UNLOCKED",
"FREEGIFT": "🎁 FREE GAMING GIFT UNLOCKED",
"VIPACCESS": "💎 VIP ACCESS ACTIVATED"
};

if(rewards[input]){
    result.innerHTML = rewards[input];
    result.style.color = "gold";

    navigator.clipboard.writeText(rewards[input]);

    animateReward();
}
else{
    result.innerHTML = "❌ INVALID CODE";
    result.style.color = "red";
}

}

function animateReward(){
let box = document.querySelector(".redeem-box");

box.classList.add("redeem-success");

setTimeout(()=>{
box.classList.remove("redeem-success");
}, 1200);
}
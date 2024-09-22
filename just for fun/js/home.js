
const storedSec = localStorage.getItem('sec');
const secElements = document.querySelectorAll(".sec");
secElements.forEach((element) => {
    element.textContent = storedSec;
})



const storedRow = localStorage.getItem('row');
const rowElements = document.querySelectorAll(".row");
rowElements.forEach((element) => {
    element.textContent = storedRow;
})



const storedSeat = localStorage.getItem('seat-number');
const seatElements = document.querySelectorAll(".seat");
seatElements.forEach((element => {
    element.textContent = storedSeat;
}))




const storedTime = localStorage.getItem('time');
const timeElements = document.querySelectorAll(".time");
timeElements.forEach((element => {
    element.textContent = storedTime;
}))


const storedEventName = localStorage.getItem('event-name');
const eventNameElements = document.querySelectorAll(".event-name");
eventNameElements.forEach((element => {
    element.textContent = storedEventName;
}))


const storedVenue = localStorage.getItem('venue');
const venueElements = document.querySelectorAll('.venue');
venueElements.forEach((element => {
    element.textContent = storedVenue;
}))


const storedSection = localStorage.getItem('section');
const sectionElements = document.querySelectorAll(".section-ticket");
sectionElements.forEach((element => {
    element.textContent = storedSection;
}))


const storedEventDate = localStorage.getItem('event-date');
const dateElements = document.querySelectorAll('.event-date');
dateElements.forEach((element => {
    element.textContent = storedEventDate;
}))


const transferButton = document.querySelector("#transfer");
const transferTickets = document.querySelector(".transfer-tickets");
const removeVisible = document.querySelector(".blue");


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
const url = localStorage.getItem('ticketBackgroundImage');
const backgroundEventImage = document.querySelectorAll(".ticket-image-container");
const img = new Image();

img.src = url;
backgroundEventImage.forEach((image => {
    image.style.backgroundImage = `url(${img.src})`;
}))


const selectTicketsContainer = document.querySelector(".select-tickets");
const transferToButton = document.querySelector(".transfer-to");

function removeTransferVisibility() {
    selectTicketsContainer.classList.remove("hidden");
}
function removeVisibility() {
    transferTickets.classList.remove("hidden");
}
function addVisibility() {
    transferTickets.classList.add("hidden");
}
function collabo() {
    selectTicketsContainer.classList.add("hidden");
    setTimeout(() => {
        transferTickets.classList.remove("hidden");
    }, 390);
}


function calculateSeatNumber() {
    document.querySelector(".seat-loop1").textContent = (parseInt(storedSeat) + 1);
    document.querySelector(".seat-loop2").textContent = (parseInt(storedSeat) + 2);
    document.querySelector(".seat-loop3").textContent = (parseInt(storedSeat) + 3);
    document.querySelector(".seatOne").textContent = (parseInt(storedSeat) + 1);
    document.querySelector(".seatTwo").textContent = (parseInt(storedSeat) + 2);
    document.querySelector(".seatThree").textContent = (parseInt(storedSeat) + 3);
}

const checkboxes = document.getElementsByClassName("round-checkbox");
const selectedSeatsCountElement = document.querySelector(".number-of-selected-seats");

Array.from(checkboxes).forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        const selectedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
        selectedSeatsCountElement.textContent = `${selectedCount}`;
        document.querySelector("#number-of-selected-seats").textContent = `${selectedCount}`;
    });
});
window.addEventListener("load", calculateSeatNumber);
removeVisible.addEventListener("click", addVisibility);
transferButton.addEventListener("click", removeTransferVisibility);
transferToButton.addEventListener("click", collabo);
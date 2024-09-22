import { getLocalStorageData } from "./localstorage.js";


const storedData = getLocalStorageData();

const storedFirstName = localStorage.getItem('first-name');
document.querySelector(".name").textContent = storedFirstName;



const storedEvent = localStorage.getItem('event-name');
document.querySelector("#event-name").textContent = storedEvent;
document.querySelector(".event-name").textContent = storedEvent;



const storedSec = localStorage.getItem('sec');
document.querySelector("#sec").textContent = storedSec;


const storedRow = localStorage.getItem('row');
document.querySelector("#row").textContent = storedRow;


const storedSeat = localStorage.getItem('seat-number');
document.querySelector("#seat").textContent = storedSeat;

const storedOtherNames = localStorage.getItem('other-names');
const fullNameValue = `${storedFirstName} ${storedOtherNames}`;
document.querySelector("#full-name").textContent = fullNameValue;



const storedNumberOfTickets = localStorage.getItem('no-of-tickets');
document.querySelector("#number-of-tickets").textContent = storedNumberOfTickets;




const storedEventDate = localStorage.getItem('event-date');
document.querySelector("#event-date").textContent = storedEventDate;


const storedTime = localStorage.getItem('time');
document.querySelector("#time").textContent = storedTime;


const storedVenue = localStorage.getItem('venue');
document.querySelector("#event-venue").textContent = storedVenue;

function calculateSeatNumber() {
    const storedTicketsNo = localStorage.getItem('ticketsNo');
    const noOfSeats = document.querySelector(".added-seat");
    noOfSeats.textContent = ((parseInt(storedTicketsNo) - 1) + parseInt(storedSeat));
}
window.addEventListener("load", calculateSeatNumber);
const url = localStorage.getItem('ticketBackgroundImage');
const EventImageContainer = document.querySelector(".event-image");
const img = new Image();

img.src = url;
EventImageContainer.src = img.src;
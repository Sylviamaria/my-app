import { getLocalStorageData } from "./localstorage.js";

const storedData = getLocalStorageData();

const storedSection = localStorage.getItem('section');
document.querySelector("#section").textContent = storedSection;


const storedRow = localStorage.getItem('row');
document.querySelector("#row").textContent = storedRow;


const storedSeat = localStorage.getItem('seat-number');
document.querySelector(".seat").textContent = storedSeat;


const storedEvent = localStorage.getItem('event-name');
document.querySelector("#eventName").textContent = storedEvent;



const storedEventDate = localStorage.getItem('event-date');
document.querySelector(".event-date").textContent = storedEventDate;



const storedTime = localStorage.getItem('time');
document.querySelector(".time").textContent = storedTime;



const storedVenue = localStorage.getItem('venue');
document.querySelector("#venue").textContent = storedVenue;



const storedLocation = localStorage.getItem('location');
document.querySelector("#event-venue-address").textContent = storedLocation;


const storedTicketType = localStorage.getItem('ticket-type');
document.querySelector("#ticket-type").textContent = storedTicketType;


const storedPurchaseDate = localStorage.getItem('purchase-date');
document.querySelector("#purchase-date").textContent = storedPurchaseDate;




const storedPrice = localStorage.getItem('price');
document.querySelector("#price").textContent = storedPrice;


const storedFee = localStorage.getItem('fee');
document.querySelector("#fee").textContent = storedFee;


const storedTicketsNo = localStorage.getItem('ticketsNo');
function calculateGrandTotal() {
    const priceValue = storedPrice;
    const feeValue = storedFee;
    const ticketsNo = storedTicketsNo;
    const grandTotal = (parseInt(priceValue) + parseInt(feeValue)) * parseInt(ticketsNo);

    // Format the grand total with two decimal places
    const formattedGrandTotal = grandTotal.toFixed(2);
    const grandTotalValue = document.querySelector(".grand-total");
    grandTotalValue.textContent = formattedGrandTotal;

    const noOfSeats = document.querySelector(".added-seats");
    noOfSeats.textContent = ((parseInt(ticketsNo) - 1) + parseInt(storedSeat));
}
window.addEventListener("load", calculateGrandTotal);

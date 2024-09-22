


const firstName = document.querySelector("#first-name").value;
const otherNames = document.querySelector("#other-names").value;
const email = document.querySelector("#email").value;
const eventName = document.querySelector("#event-name").value;
const eventImage = document.querySelector("#event-image");
const eventVenue = document.querySelector("#venue").value;
const eventLocation = document.querySelector("#location").value;
const eventDate = document.querySelector("#event-date").value;
const purchaseDate = document.querySelector("#purchase-date").value;
const ticketType = document.querySelector("#ticket-type").value;
const section = document.querySelector("#section").value;
const sec = document.querySelector("#sec").value;
const row = document.querySelector("#row").value;
const ticketsNumber = document.querySelector("#no-of-tickets").value;
const seatNumber = document.querySelector("#seat-number").value;
const price = document.querySelector("#price").value;
const fee = document.querySelector("#fee").value;
const ticketsNo = document.querySelector("#ticketsNo").value;
const time = document.querySelector("#time").value;
const submitButton = document.querySelector("#submit-button");
const clearButton = document.querySelector("#clear-data");
const inputs = document.querySelectorAll("input");



inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (input.value.trim() !== "") {
        input.style.borderColor = "green";
        input.style.borderWidth = "2px";
        input.style.borderStyle = "solid";
        } else {
        input.style.borderColor = ""; // Reset to default border color
        input.style.borderWidth = "";
        input.style.borderStyle = "";
        }
    });
});

inputs.forEach(input => {
    input.addEventListener('change', () => {
        const inputId = input.id;
        const inputValue = input.value;

        // Save the value to localStorage using the input ID as the key
        localStorage.setItem(inputId, inputValue);
    });
});




clearButton.addEventListener("click", clearLocalStorage);
function clearLocalStorage() {
    localStorage.clear();
}


submitButton.addEventListener("click", onload);
eventImage.addEventListener('change', () => {

    const fr = new FileReader();

    fr.readAsDataURL(eventImage.files[0]);

    fr.addEventListener('load', () => {

        const url = fr.result;
        
        localStorage.setItem('ticketBackgroundImage', url);
    })
})




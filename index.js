const grounds = {
    "Cricket Ground": "Available",
    "Football Ground": "Booked",
    "Basketball Court": "Available"
};

const statusIds = {
    "Cricket Ground": "cricketStatus",
    "Football Ground": "footballStatus",
    "Basketball Court": "basketballStatus"
};

const form = document.getElementById("bookingForm");
const message = document.getElementById("message");
const dateInput = document.getElementById("date");

const today = new Date().toISOString().split("T")[0];
dateInput.min = today;

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const ground = document.getElementById("ground").value;
    const date = document.getElementById("date").value;

    if(name === "" || ground === "" || date === ""){
        message.style.color = "red";
        message.innerText = "Please fill all fields.";
        return;
    }

    const selectedDate = new Date(date);
    const currentDate = new Date();

    currentDate.setHours(0,0,0,0);

    if(selectedDate < currentDate){
        message.style.color = "red";
        message.innerText = "Past dates cannot be booked.";
        return;
    }

    if(grounds[ground] === "Booked"){
        message.style.color = "red";
        message.innerText =
        ground + " is already booked. No slots available.";
        return;
    }

    grounds[ground] = "Booked";

    const statusElement =
    document.getElementById(statusIds[ground]);

    statusElement.className = "booked";
    statusElement.innerHTML = "🔴 Booked";

    message.style.color = "#16a34a";
    message.innerText =
    "Booking Request Submitted Successfully!";

    form.reset();
});
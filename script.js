const form = document.getElementById("bookingForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pickup = document.getElementById("pickup").value;
  const car = document.getElementById("car").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  confirmation.innerHTML = `✅ Booking Confirmed! <br>
    Name: ${name} <br>
    Email: ${email} <br>
    Pickup: ${pickup} <br>
    Car Type: ${car} <br>
    Date: ${date} <br>
    Time: ${time}`;

  form.reset();
});

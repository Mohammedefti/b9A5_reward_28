const seatSelected  = document.getElementById('selected-seat');
const totalBookedEl = document.getElementById("total-booked")
const availableSeatEl =  document.getElementByI("available-seat")

let selectedSeat = [];

function handleSelectSeat(event) {
    // console.log(event.innerText);


    seatSelected.innerHTML = `<li class="text-base flex justify-between " >
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
    </li>`
event.classList.add('bg-primary');
    event.classList.add('text-white');

    selectedSeat.push(event.innerText);

    totalBookedEl.innerText= selectedSeat.length;

    

    
// decrease available seat
    const availableSeatValue = parseFloat(availableSeatEl.innerText); 
    const newAvailableSeatValue = availableSeatValue - 1;
    availableSeatEl.innerText = newAvailableSeatValue;
    
}





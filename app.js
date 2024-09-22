const seatSelected  = document.getElementById('selected-seat');
const totalBookedEl = document.getElementById("total-booked")
// problem
// const availableSeatEl =  document.getElementByI("available-seat")
const totalPriceEl = document.getElementById("total-price");
const couponInputEl = document.getElementById("coupon-field");
const couponBtnEl = document.getElementById("coupon-btn");



let selectedSeat = [];
let totalPrice = 0;

function handleSelectSeat(event) {

    // for don't book as seat twice
    const value = event.innerText;

    if (selectedSeat.includes(value)) {
        return alert('Seat already Booked');
    }

    
event.classList.add('bg-primary');
    event.classList.add('text-white');

    selectedSeat.push(event.innerText);

    totalBookedEl.innerText= selectedSeat.length;

    seatSelected.innerHTML += `<li class="text-base flex justify-between " >
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
    </li>`
    
    // update total price;
    totalPrice += 550;
    totalPriceEl.innerText = totalPrice.toFixed(2);

    // active coupon card

// problem
// decrease available seat
    // const availableSeatValue = parseFloat(availableSeatEl.innerText); 
    // const newAvailableSeatValue = availableSeatValue - 1;
    // availableSeatEl.innerText = newAvailableSeatValue;

    // active coupon button
    if (selectedSeat.length > 3) {
        couponInputEl.removeAttribute('disabled');
        couponBtnEl.removeAttribute('disabled');

     }
    // else{
    //     couponInputEl.setAttribute('disabled') 
    //     couponBtnEl.setAttribute('disabled') 
    // }

  
}

    
    





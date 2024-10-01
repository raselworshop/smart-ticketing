// id's 
const selectedSeatEl = document.getElementById('selected-seat');
const totalBookedEl = document.getElementById('total-booked');
const availableSeatEl = document.getElementById('available-seat');
const totalPriceEl = document.getElementById('total-price');
const couponInput = document.getElementById('coupon-field');
const couponInputBtn = document.getElementById('coupon-btn');

let selectedSeat = [];
let totalPrice = 0;
function handleSelectSeat(event){
    // to check one seat double clicked or not 
    const value = event.innerText;
    if(selectedSeat.includes(value)){
        return alert("Seat already booked, please choose another one!!!")
    }else if(selectedSeat.length < 4){
        
    event.classList.add('bg-lime-500');
    event.classList.add('text-white');

    selectedSeat.push(event.innerText);
    // increase booked seat
    totalBookedEl.innerText = selectedSeat.length

    // decreased available seats
    const availableSeatValues = parseFloat(availableSeatEl.innerText);
    const newAvailableSeatValues = availableSeatValues - 1;
    availableSeatEl.innerText = newAvailableSeatValues;

    // booked seat after seat button clicked
    selectedSeatEl.innerHTML += `
                    <li class="text-base font-normal flex justify-between">
                        <span>${event.innerText}</span>
                        <span>Economy</span>
                        <span>550</span>
                    </li>
    `

    // calculate total price
    totalPrice += 550; 
    totalPriceEl.innerText = totalPrice.toFixed(2);

    // coupon code 
    if(selectedSeat.length > 3){
        couponInput.removeAttribute('disabled');
        couponInputBtn.removeAttribute('disabled');
    }
    }else{
        return alert('Maximum seat booked!!!')
    }

}
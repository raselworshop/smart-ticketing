// id's 
const selectedSeatEl = document.getElementById('selected-seat');
const totalBookedEl = document.getElementById('total-booked');
const availableSeatEl = document.getElementById('available-seat');
const totalPriceEl = document.getElementById('total-price');
const couponInput = document.getElementById('coupon-field');
const couponInputBtn = document.getElementById('coupon-btn');
const defaultTextEl = document.getElementById('default-text');
const grandTotalEl = document.getElementById('grand-total');
const phoneNumberEl = document.getElementById('phone-number');
const nextBtnEl = document.getElementById('next-btn');

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

    // default text remove 
        defaultTextEl.classList.add('hidden')


    // default text changes to You are booking 
    // const newText = document.createElement('h2')
    // newText.innerText = `You're booking seats:`;
    // const defaultTextElCh = document.getElementById('default-text');
    // defaultTextElCh.appendChild(newText)

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

// coupon button function
document.getElementById('coupon-btn').addEventListener('click', function(){
    const couponInputValue = couponInput.value;
    let couponSave = 0;
    console.log(couponInputValue)
    if(couponInputValue !== 'NEW15' && couponInputValue !== 'Couple 20'){
        alert("Your given cuopon code isn't valid!!!");
        return;
    }
    
    if(couponInputValue === 'NEW15'){
        couponSave = totalPrice * 0.15 ;
    }else if(couponInputValue === 'Couple 20'){
        couponSave = totalPrice * 0.20 ;
    }
    // show coupon price 
    const showCouponPriceEl = document.getElementById('show-coupon-price');
    showCouponPriceEl.innerHTML = `
            <p>Discount</p>
            <p>
                <span>-BDT:</span>
                <span>${couponSave.toFixed(2)}</span>
            </p>
    `
    // garnd total value 
    const grandTotalValue = totalPrice - couponSave;
    grandTotalEl.innerText = grandTotalValue.toFixed(2)
})

// phone number function 
phoneNumberEl.addEventListener('input', function(e){
    const inputPNUmberValue = e.target.value;
    console.log(inputPNUmberValue)
    if(inputPNUmberValue.length >= 11){
        nextBtnEl.removeAttribute("disabled")
    }else{
        nextBtnEl.setAttribute('disabled', true)
    }
    
    // if(inputPNUmberValue.length === 11){  // we can use here >= 11, but BD phone is almost 11 digits
    //     nextBtnEl.disabled = false;
    // }else{
    //     nextBtnEl.disabled = true
    // }
})

document.getElementById('continue-btn').addEventListener('click', function(){
    window.location.reload();
})
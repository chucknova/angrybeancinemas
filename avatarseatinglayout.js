const localStoragePrefix = 'seats2_';
const seats = document.getElementById('seats2');
const selectedSeats2 = [];

// Create seats
for (let i = 1; i <= 78; i++) {
  const seat = document.createElement('button');
  seat.className = 'seat';
  seat.innerText = i;
  seat.addEventListener('click', () => {
    if (selectedSeats2.includes(i)) {
      // Deselect seat
      selectedSeats2.splice(selectedSeats2.indexOf(i), 1);
      seat.classList.remove('selected');
    } else {
      // Select seat
      selectedSeats2.push(i);
      seat.classList.add('selected');
    }
  });
  // Set seat status from localStorage
  if (localStorage.getItem(`${localStoragePrefix}seat${i}`) === 'unavailable') {
    seat.classList.add('unavailable');
    seat.disabled = true;
  }
  seats.appendChild(seat);
}

// Add confirm button
const confirmBtn = document.createElement('button');
confirmBtn.innerText = 'Confirm Selection';
confirmBtn.addEventListener('click', () => {
  selectedSeats2.forEach((seatNum) => {
    const seat = document.querySelector(`.seat:nth-child(${seatNum})`);
    seat.classList.remove('selected');
    seat.classList.add('unavailable');
    seat.disabled = true;
    localStorage.setItem(`${localStoragePrefix}seat${seatNum}`, 'unavailable');
  });
  confirmBtn.classList.add('confirmed');
});

// Add confirm button to the page
const wrapper = document.createElement('div');
wrapper.style.textAlign = 'center';
wrapper.appendChild(confirmBtn);
seats.after(wrapper);

// Load saved seats from localStorage on page load
window.addEventListener('load', () => {
  for (let i = 1; i <= 78; i++) {
    const seat = document.querySelector(`.seat:nth-child(${i})`);
    if (localStorage.getItem(`${localStoragePrefix}seat${i}`) === 'unavailable') {
      seat.classList.add('unavailable');
      seat.disabled = true;
    }
  }
});
confirmBtn.style.fontFamily = 'Poppins, sans-serif';
confirmBtn.style.fontSize = '15px';
confirmBtn.style.backgroundColor = '#d0d0d0';
confirmBtn.style.paddingTop = '5px';
confirmBtn.style.paddingBottom = '5px';
confirmBtn.style.width = '180px';
confirmBtn.style.margin = 'auto';
confirmBtn.style.color = 'black';
confirmBtn.style.marginTop = '20px';
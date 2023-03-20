let ticketSlip = document.getElementById("ticket-slip");
let refreshmentSlip = document.getElementById("refreshmentSlip");
let movieSlip = document.getElementById("movieSlip");

function getStorage() {
    // Save the updated ticketArray data to local storage
    localStorage.setItem('ticketData', JSON.stringify(ticketArray));
}
getStorage();
for (let i = 0; i < myCart.length; i++) {
    let movie = myCart[i];
    console.log(movie);
    ticketSlip.innerHTML += `
      <div class="cart-list-flex">
        <div class="maincart-info">
          <h2 class="refreshmenttitle">${movie.MovieTitle}</h2>
          <h4 class="refreshmentsubtitle">${movie.MovieDate}</h4>
          <h4 class="refreshmentsubtitle">${movie.MovieTime}</h4>
          <h4 class="refreshmentsubtitle">Quantity: ${movie.MovieQuantity}</h4>
          <h4 class="refreshmentprice">NGN <span id="totalmovie-${i}">${movie.MoviePrice * movie.MovieQuantity}</span></h4>
        </div>
      </div>
    `;
}
for (let i = 0; i < refCart.length; i++) {
    let food = refCart[i];
    console.log(food);
    ticketSlip.innerHTML += `
    <div class="cart-list-flex">
      <div class="maincart-info">
        <h2 class="refreshmenttitle">${food.refreshmentTitle}</h2>
        <h3 class="refreshmentsubtitle">${food.refreshmentSubtitle}</h3>
        <h3 class="refreshmentsubtitle">Quantity: ${food.refreshmentQuantity}</h3>
        <h4 class="refreshmentprice">NGN <span id="total-${i}">${food.refreshmentPrice * food.refreshmentQuantity}</span></h4>
      </div>
    </div>
  `;
}
function calculateTotal() {
    let totalPrice = 0;
    for (let i = 0; i < refCart.length; i++) {
        totalPrice += refCart[i].refreshmentPrice * refCart[i].refreshmentQuantity;
    }

    let totalMoviePrice = 0;
    for (let i = 0; i < myCart.length; i++) {
        let movie = myCart[i];
        let movieTotal = movie.MoviePrice * movie.MovieQuantity;
        totalMoviePrice += movieTotal;
    }

    let grandTotal = totalPrice + totalMoviePrice;

    let ticketPrice = document.getElementById("ticketPrice")
    ticketPrice.innerHTML = `<h3 class = "grandtotaltext">Total Price: NGN ${grandTotal}</h3>`;
}
calculateTotal()

function downloadTicket() {    
    // Save the cart data to local storage
    getStorage();

      // Calculate the total price and display it on the screen
    calculateTotal();

    // Get the ticket-slip element
    const content = document.querySelector("#ticket-slip");

    // Use html2canvas to capture the content as an image
    html2canvas(content, {
        useCORS: true, // To allow loading external images
        allowTaint: true, // To allow rendering of cross-origin images
        logging: true, // To enable logging for debugging
        letterRendering: true, // To improve rendering of text
        scale: 5 // To improve resolution of the image
    }).then(canvas => {
        // Create a new jsPDF instance
        const doc = new jsPDF();

        // Add the image to the PDF
        doc.addImage(canvas.toDataURL(), "JPEG", 0, 0, 180, 292);

        // Save the PDF
        doc.save("angrybeancinemas.pdf");
    });

    // Redirect the user to the thank you page after 2 seconds
    setTimeout(() => {
        window.location.href = "thankyou.html"
    }, 2000);
}

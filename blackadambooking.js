let movieCartone = [];
let blackadamDate = document.getElementById("inputblackadamdate");
let blackadamTime = document.getElementById("inputblackadamtime");
let blackadamTitle = document.getElementById("blackadamtitle");
let moviePrice = 2500;
function addBlackAdamCart() {
    if (blackadamDate.value == "" || blackadamTime.value == "") {
        alert("Field cannot be empty")
    } else {
        myCart.push(
            {
                MovieImage: "Images/blackadamposter.jpg",
                MovieTitle: blackadamTitle.innerHTML,
                MovieDate: blackadamDate.value,
                MovieTime: blackadamTime.value,
                MoviePrice: `${moviePrice}`,
                MovieQuantity: 1
            }
        )
            blackadamDate.value = "";
            blackadamTime.value = "";
        // Store the updated cart data in localStorage
        localStorage.setItem('cartData', JSON.stringify(myCart));
        alert("Item added to cart");
        window.location.href = "refreshment-question.html"
    }
  }
  // Get the cart items
  function getCartItems() {
    console.log(myCart); 
  }
  getCartItems();
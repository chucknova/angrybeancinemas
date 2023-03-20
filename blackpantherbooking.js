let movieCartfive = [];
let blackpantherDate = document.getElementById("inputblackpantherdate");
let blackpantherTime = document.getElementById("inputblackpanthertime");
let blackpantherTitle = document.getElementById("blackpanthertitle");
let moviePrice = 2500;
function addBlackPantherCart() {
    if (blackpantherDate.value == "" || blackpantherTime.value == "") {
        alert("Field cannot be empty")
    } else {
        myCart.push(
            {
                MovieImage: "Images/blackpantherposter.jpg",
                MovieTitle: blackpantherTitle.innerHTML,
                MovieDate: blackpantherDate.value,
                MovieTime: blackpantherTime.value,
                MoviePrice: `${moviePrice}`,
                MovieQuantity: 1
            }
        )
        blackpantherDate.value = "";
        blackpantherTime.value = "";
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
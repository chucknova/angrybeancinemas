let movieCarttwo = [];
let antmanDate = document.getElementById("inputantmandate");
let antmanTime = document.getElementById("inputantmantime");
let antmanTitle = document.getElementById("antmantitle");
let moviePrice = 2500;
function addAntmanCart() {
    if (antmanDate.value == "" || antmanTime.value == "") {
        alert("Field cannot be empty")
    } else {
        myCart.push(
            {
                MovieImage: "Images/quantamaniaposter.webp",
                MovieTitle: antmanTitle.innerHTML,
                MovieDate: antmanDate.value,
                MovieTime: antmanTime.value,
                MoviePrice: `${moviePrice}`,
                MovieQuantity: 1
            }
        )
        antmanDate.value = "";
        antmanTime.value = "";
        // Store the updated cart data in localStorage
        localStorage.setItem('cartData', JSON.stringify(myCart));
        alert("Item added to cart");
        window.location.href = "refreshment-question.html"
    }
}
console.log(myCart);
// Get the cart items
function getCartItems() {
    console.log(myCart);
}
getCartItems();
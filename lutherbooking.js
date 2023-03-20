let movieCarteight = [];
let lutherDate = document.getElementById("inputlutherdate");
let lutherTime = document.getElementById("inputluthertime");
let lutherTitle = document.getElementById("luthertitle");
let moviePrice = 2500;
function addLutherCart() {
    if (lutherDate.value == "" || lutherTime.value == "") {
        alert("Field cannot be empty")
    } else {
        myCart.push(
            {
                MovieImage: "Images/lutherposter.jpg",
                MovieTitle: lutherTitle.innerHTML,
                MovieDate: lutherDate.value,
                MovieTime: lutherTime.value,
                MoviePrice: `${moviePrice}`,
                MovieQuantity: 1
            }
        )
        lutherDate.value = "";
        lutherTime.value = "";
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
let movieCartnine = [];
let entergalacticDate = document.getElementById("inputentergalacticdate");
let entergalacticTime = document.getElementById("inputentergalactictime");
let entergalacticTitle = document.getElementById("entergalactictitle");
let moviePrice = 2500;
function addEntergalacticCart() {
    if (entergalacticDate.value == "" || entergalacticTime.value == "") {
        alert("Field cannot be empty")
    } else {
        myCart.push(
            {
                MovieImage: "Images/entergalacticposter.jpg",
                MovieTitle: entergalacticTitle.innerHTML,
                MovieDate: entergalacticDate.value,
                MovieTime: entergalacticTime.value,
                MoviePrice: `${moviePrice}`,
                MovieQuantity: 1
            }
        )
        entergalacticDate.value = "";
        entergalacticTime.value = "";
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
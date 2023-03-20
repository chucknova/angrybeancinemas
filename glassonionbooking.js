let movieCartseven = [];
let glassonionDate = document.getElementById("inputglassoniondate");
let glassonionTime = document.getElementById("inputglassoniontime");
let glassonionTitle = document.getElementById("glassoniontitle");
let moviePrice = 2500;
function addGlassOnionCart() {
    if (glassonionDate.value == "" || glassonionTime.value == "") {
        alert("Field cannot be empty")
    } else {
        myCart.push(
            {
                MovieImage: "Images/glassonionposter.webp",
                MovieTitle: glassonionTitle.innerHTML,
                MovieDate: glassonionDate.value,
                MovieTime: glassonionTime.value,
                MoviePrice: `${moviePrice}`,
                MovieQuantity: 1
            }
        )
        glassonionDate.value = "";
        glassonionTime.value = "";
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
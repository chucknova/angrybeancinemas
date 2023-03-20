let movieCartthree = [];
let avatarDate = document.getElementById("inputavatardate");
let avatarTime = document.getElementById("inputavatartime");
let avatarTitle = document.getElementById("avatartitle");
let moviePrice = 2500;
function addAvatarCart() {
    if (avatarDate.value == "" || avatarTime.value == "") {
        alert("Field cannot be empty")
    } else {
        myCart.push(
            {
                MovieImage: "Images/avatarposter.jpg",
                MovieTitle: avatarTitle.innerHTML,
                MovieDate: avatarDate.value,
                MovieTime: avatarTime.value,
                MoviePrice: `${moviePrice}`,
                MovieQuantity: 1
            }
        )
        avatarDate.value = "";
        avatarTime.value = "";
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
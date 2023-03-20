let refreshments = [
    {
        refreshmentImage: "Images/PopcornCombo 1.png",
        refreshmentTitle: "AngryBean Classic Package",
        refreshmentSubtitle: "Medium Popcorn + Pepsi 60Cl",
        refreshmentPrice: 2500,
        refreshmentQuantity: 1
    },
    {
        refreshmentImage: "Images/PopcornCombo Deluxe.png",
        refreshmentTitle: "AngryBean Deluxe Package",
        refreshmentSubtitle: "Large Popcorn + Pepsi 60Cl",
        refreshmentPrice: 3000,
        refreshmentQuantity: 1
    },
    {
        refreshmentImage: "Images/Lshawarma.png",
        refreshmentTitle: "AngryBean L. Shawarma Package",
        refreshmentSubtitle: "Large Shawarma + Pepsi 60Cl",
        refreshmentPrice: 3000,
        refreshmentQuantity: 1
    },
    {
        refreshmentImage: "Images/largeicecream.png",
        refreshmentTitle: "Large IceCream Bowl for 4",
        refreshmentSubtitle: "4 solid spoons of IceCream",
        refreshmentPrice: 3500,
        refreshmentQuantity: 1
    },
    {
        refreshmentImage: "Images/miniicecream.jpg",
        refreshmentTitle: "Mini Icecream Cone",
        refreshmentSubtitle: "The Classic IceCream Cone",
        refreshmentPrice: 1500,
        refreshmentQuantity: 1
    },
    {
        refreshmentImage: "Images/evawater.png",
        refreshmentTitle: "Eva Water 75Cl",
        refreshmentSubtitle: "Just to balance the sugar",
        refreshmentPrice: 500,
        refreshmentQuantity: 1
    }
];
// let cartNo = document.getElementById("cartno")
let refreshmentContainer = document.getElementById("refreshment-container");

for (let i = 0; i < refreshments.length; i++) {
    let refreshment = refreshments[i];
    console.log(refreshment);
    // create HTML elements for refreshment
    let refreshmentDiv = document.createElement("div");
    refreshmentDiv.className = "refreshment-bar-flex-item";

    let image = document.createElement("img");
    image.setAttribute("src", refreshment.refreshmentImage);
    image.setAttribute("alt", "");
    image.setAttribute("id", "refreshment-image");
    image.className = "refreshment-image";

    let title = document.createElement("h2");
    title.textContent = refreshment.refreshmentTitle;
    title.setAttribute("id", "refreshment-title");
    title.className = "refreshment-title";

    let subtitle = document.createElement("h2");
    subtitle.textContent = refreshment.refreshmentSubtitle;
    subtitle.setAttribute("id", "refreshment-subtitle");
    subtitle.className = "refreshment-subtitle";

    let price = document.createElement("h4");
    price.textContent = `Price: NGN ${refreshment.refreshmentPrice}`;
    price.setAttribute("id", "refreshment-price");
    price.className = "refreshment-price";

    let button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.setAttribute("id", "add-to-cart");
    button.className = "refreshment-button";

    // add click event listener to button
    button.addEventListener("click", function () {
        // check if refreshment is already in cart
        let itemInCart = refCart.find(item => item.refreshmentTitle === refreshment.refreshmentTitle);
        if (itemInCart) {
            alert(`${refreshment.refreshmentTitle} is already in your cart`);
        } else {
            refCart.push(refreshment);
            alert(`${refreshment.refreshmentTitle} added to cart`);
            localStorage.setItem('refcartData', JSON.stringify(refCart));
            console.log(refCart);
            // cartNo.innerHTML == myCart.length;
        }
    });

    // append HTML elements to refreshment container
    refreshmentDiv.appendChild(image);
    refreshmentDiv.appendChild(title);
    refreshmentDiv.appendChild(subtitle);
    refreshmentDiv.appendChild(price);
    refreshmentDiv.appendChild(button);
    refreshmentContainer.appendChild(refreshmentDiv);
}
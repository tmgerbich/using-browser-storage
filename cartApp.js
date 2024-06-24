// Create a function called initializeCart that checks if there's a cart in localStorage; if not, it initializes an empty cart and stores it in localStorage.
function initializeCart() {
    let emptyCart = [];
    if (!localStorage.getItem("Cart")) {
        localStorage.setItem("Cart", JSON.stringify(emptyCart));
    }
}

// Create a function called addItem that takes an item object as a parameter, retrieves the cart from localStorage, adds the item to the cart, and then stores the updated cart back into localStorage.
object1 = {"id": 1681323912259, "name": "Pears", "price": 3}
object2 = {  "id": 1681323954156, "name": "Apples", "price": 2}

function addItem(item) {
    const currCart = JSON.parse(localStorage.getItem("Cart"));
    currCart.push(item);
    localStorage.setItem("Cart", JSON.stringify(currCart));
}

// Create a function called removeItem that takes an item id as a parameter, retrieves the cart from localStorage, removes the item with the given id from the cart, and then stores the updated cart back into localStorage.
function removeItem(itemId) {
    const cart = JSON.parse(localStorage.getItem("Cart"));
    const updatedCart = cart.filter(item => item.id !== itemId); 
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
}

// Create a function called displayCart that retrieves the cart from localStorage and logs the cart contents to the console.
function displayCart() {
    const cart = JSON.parse(localStorage.getItem("Cart"));
    if (cart) {
        for (const [name, value] of Object.entries(cart)) {
            console.log(name, ":", value);
        }
    } else {
        console.log("Cart is empty.");
    }
}

// Create event listeners for the add item form and display cart button to call the respective functions.
const addItemForm = document.getElementById("addItemForm");
const displayCartButton = document.getElementById("displayCartButton");

addItemForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const itemName = document.getElementById("itemName").value;
    const itemPrice = parseFloat(document.getElementById("itemPrice").value);
    const itemId = Date.now(); // Using current timestamp as a unique ID
    const item = {
        id: itemId,
        name: itemName,
        price: itemPrice
    };
    addItem(item);
});

displayCartButton.addEventListener("click", displayCart);

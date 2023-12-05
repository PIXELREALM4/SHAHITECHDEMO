const images = document.querySelectorAll('.prd-img-multi-pht');
const display = document.querySelector('.prd-img-scrn-dis');

function changeImage(index) {
    // Remove the 'active' class from all images
    images.forEach((img) => img.classList.remove('active'));
    // Add the 'active' class to the clicked image
    images[index].classList.add('active');
    // Display the selected image in the display area
    display.innerHTML = images[index].innerHTML;
}

// Get references to the HTML elements
var decrementButton = document.getElementById("decrement");
var incrementButton = document.getElementById("increment");
var quantityDisplay = document.getElementById("quantity");

// Initial quantity value
var quantity = 1;

// Function to update the quantity display
function updateQuantityDisplay() {
    quantityDisplay.textContent = quantity;
}

// Event listener for the decrement button
decrementButton.addEventListener("click", function() {
    if (quantity > 1) {
        quantity--;
        updateQuantityDisplay();
    }
});

// Event listener for the increment button
incrementButton.addEventListener("click", function() {
    quantity++;
    updateQuantityDisplay();
});

// Initial display
updateQuantityDisplay();

    // Get references to the HTML elements
    var decrementButton = document.getElementById("decrement");
    var incrementButton = document.getElementById("increment");
    var quantityDisplay = document.getElementById("quantity");
    var priceDisplay = document.getElementById("price");

    // Initial quantity and constant price values
    var quantity = 1;
    var constantPrice = parseInt(priceDisplay.textContent);

    // Function to update the quantity display
    function updateQuantityDisplay() {
        quantityDisplay.textContent = quantity;
        updatePriceDisplay();
    }

    // Function to update the price display
    function updatePriceDisplay() {
        priceDisplay.textContent = constantPrice * quantity + " PKR";
    }

    // Event listener for the decrement button
    decrementButton.addEventListener("click", function() {
        if (quantity > 1) {
            quantity--;
            updateQuantityDisplay();
        }
    });

    // Event listener for the increment button
    incrementButton.addEventListener("click", function() {
        quantity++;
        updateQuantityDisplay();
    });

    // Initial display
    updateQuantityDisplay();


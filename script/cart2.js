
        
document.addEventListener('DOMContentLoaded', function () {
    // Get all cart quantity input elements
    var quantityInputs = document.querySelectorAll('.cart-quantity-input');

    // Add event listeners to each quantity input
    quantityInputs.forEach(function (input) {
        input.addEventListener('input', updateTotalPrice);
    });

    // Function to update total price
    function updateTotalPrice() {
        var totalPrice = 0;

        // Iterate through each cart item
        quantityInputs.forEach(function (input, index) {
            var quantity = parseFloat(input.value) || 0;
            var price = parseFloat(document.querySelectorAll('.cart-price')[index].innerText) || 0;
            totalPrice += quantity * price;
        });

        // Update the total price display
        document.getElementById('total-price').innerText =  totalPrice.toFixed(2);
    }

    function addtocrt() {
        updateTotalPrice(); 
    }
});


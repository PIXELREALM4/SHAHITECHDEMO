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



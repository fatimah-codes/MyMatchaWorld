const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('click', function() {
    img.style.width = "100%";
    img.style.height = "auto";
    });
});

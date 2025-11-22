window.onload = function() {
    console.log('Page loaded');
};
const images = document.querySelectorAll('img');
images.forEach((img, index) => {
    img.setAttribute('tabindex', index + 1);
});
function highlight(element) {
    element.style.border = '3px solid green';
    console.log('Image focused');
}
function removeHighlight(element) {
    element.style.border = 'none';
}

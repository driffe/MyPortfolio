const cleanButton = document.getElementById('clean-button');
cleanButton.addEventListener('click', function() {
    const keyElements = document.querySelectorAll('.key');
    keyElements.forEach(function(element) {
        element.remove();
    });
});

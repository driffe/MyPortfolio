document.addEventListener('keydown', function(event) {
    const keyPressed = event.key;
    const keyElement = createKeyElement(keyPressed);
    moveKeyElement(keyElement);
});

function createKeyElement(key) {
    const keyElement = document.createElement('div');
    keyElement.classList.add('key');
    keyElement.textContent = key;
    document.body.appendChild(keyElement);
    return keyElement;
}

function moveKeyElement(keyElement) {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    keyElement.style.left = randomX + 'px';
    keyElement.style.top = randomY + 'px';
}


const cleanButton = document.getElementById('clean-button');
cleanButton.addEventListener('click', function() {
    const keyElements = document.querySelectorAll('.key');
    keyElements.forEach(function(element) {
        element.remove();
    });
});

document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty (
      '--x', (
        e.clientX+window.scrollX
      )
      + 'px'
    );
    document.documentElement.style.setProperty (
      '--y', (
        e.clientY+window.scrollY
      ) 
      + 'px'
    );
  }



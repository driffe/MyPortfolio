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

document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn');
  const fullScreenMenu = document.querySelector('.full-screen-menu');

  menuBtn.addEventListener('click', function () {
      fullScreenMenu.classList.toggle('active');
  });

  fullScreenMenu.addEventListener('click', function (event) {
      if (event.target === fullScreenMenu) {
          fullScreenMenu.classList.remove('active');
      }
  });
});

function info() {
  var infos = document.querySelectorAll(".info");

  for (var i = 0; i < infos.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = infos[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      infos[i].classList.add("active");
    } else {
      infos[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", info);

function addListenersToLinks() {
  const navLinks = document.querySelectorAll('a.nav-link');
  
  Array.from(navLinks).forEach(navLink => {
    navLink.addEventListener('click', event => {
      document.querySelector('#menu-checkbox').checked = false;
    })
  })  
}

document.body.onload = addListenersToLinks();  


function toggleClass(targetElement, addedClass) {
  if (targetElement.classList.contains(addedClass)) {
    targetElement.classList.remove(addedClass);
  }
  else {
    targetElement.classList.add(addedClass);
  }
};

// This is the function we add to our menu button to enable its click functionality
document.querySelector('.menu-btn').addEventListener('click', function() {
  
  // This toggleClass is for added 'menu--open' to our menu HTML element. This will open the menu.
  toggleClass(document.querySelector('.menu'), 'menu--open');
  
  // This toggleClass is for adding '.menu-btn--on' to our menu button HTML element. This creates the animation of the hamburger/hotdog icon to the close icon.
  toggleClass(document.querySelector('.menu-btn'), 'menu-btn--on');
});
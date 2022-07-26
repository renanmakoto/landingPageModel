/*$('.menuItemsMobile i').click(function() {
    $('.mobileMenu').fadeIn();
})*/
//Not in use


let menuMobileButton = document.querySelector('.menuItemsMobile i')

menuMobileButton.addEventListener('click', () => {
    let menuItemsJS = document.querySelector('.mobileMenu')
    if (menuItemsJS.classList.contains('show')) {
        menuItemsJS.classList.remove('show')
        menuItemsJS.classList.add('hide')
    } else {
        menuItemsJS.classList.remove('hide')
        menuItemsJS.classList.add('show')
    }
})
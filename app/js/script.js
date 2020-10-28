var d = document,
  hamburgerMenu = d.getElementById('hamburgerMenu');
  menuStatus = 'closed',
  searchStatus = 'closed',
  windowWidth = window.innerWidth;

  if ( windowWidth < 768 ) {
    getOS = 'mobile';
  } else if ( windowWidth < 1023 ) {
    getOS = 'tablet';
  } else if ( windowWidth >= 1024 ) {
    getOS = 'desktop';
  }

//////// DESKTOP HAMBURGER MENU

hamburgerMenu.addEventListener("click", menuToggle);

function menuToggle() {
  if ( menuStatus === 'closed' ) {
    gsap.to('#lineTop', { duration:.2, transformOrigin:'top left', rotation:45, x:4, ease:'expo.out' });
    gsap.to('#lineBttm', { duration:.2, transformOrigin:'bottom left', rotation:-45, x:4, ease:'expo.out' });
    gsap.to('#lineMid', { duration:.1, autoAlpha:0, ease:'expo.out' });
    if ( getOS === 'mobile' || getOS === 'tablet' ) {
       gsap.to('#lineBttm', { y:.5, ease:'expo.out' });
    }
    menuStatus = 'open';
    openHamburgerMenu();
  } else {
    gsap.to('#lineTop', { duration:.2, transformOrigin:'top left', rotation:0, x:0, ease:'expo.out' });
    gsap.to('#lineBttm', { duration:.2, transformOrigin:'bottom left', rotation:0, x:0, ease:'expo.out' });
    gsap.to('#lineMid', { duration:.1, autoAlpha:1, ease:'expo.out' });
    if ( getOS === 'mobile' || getOS === 'tablet' ) {
      gsap.to('#lineBttm', { y:0, ease:'expo.out' });
   }
    menuStatus = 'closed';
    closeHamburgerMenu();
  }
}

function openHamburgerMenu() {
  if ( getOS === 'mobile' || getOS === 'tablet' ) {
    gsap.set('.mobile-nav .nav-menu', { display:'flex' });
  } else {
    gsap.set('.hamburger-nav-dropdown', { display:'block' });
    gsap.set('header .desktop-nav .primary-navigation .primary-secondary-menu', { display:'none' });
    gsap.set('header .desktop-nav .secondary-navigation ul', { display:'none' });
    gsap.set('header .desktop-nav .primary-navigation .search-menu', { display:'flex' });
  }
}

function closeHamburgerMenu() {
  if ( getOS === 'mobile' || getOS === 'tablet' ) {
    gsap.set('.mobile-nav .nav-menu', { display:'none' });
  } else {
    gsap.set('.hamburger-nav-dropdown', { display:'none' });
    gsap.set('header .desktop-nav .primary-navigation .primary-secondary-menu', { display:'block' });
    gsap.set('header .desktop-nav .secondary-navigation ul', { display:'block' });
    gsap.set('header .desktop-nav .primary-navigation .search-menu', { display:'none' });
  } 
}

//////// DESKTOP PRIMARY NAVIGATION

$('header .desktop-nav .primary-navigation ul.primary-menu li a:not(:only-child)').click(function(e) {
  $(this).siblings('.nav-dropdown').toggle();
  // Close one dropdown when selecting another
  $('.nav-dropdown').not($(this).siblings()).hide();
  e.stopPropagation();
});
// Clicking away from dropdown will remove the dropdown class
$('html').click(function() {
  $('.nav-dropdown').hide();
  if ( searchStatus === 'open' && menuStatus !== 'open' ) {
    gsap.set('header .desktop-nav .primary-navigation .primary-secondary-menu', { display:'block' });
    gsap.set('header .desktop-nav .secondary-navigation ul', { display:'block' });
    gsap.set('header .desktop-nav .primary-navigation .search-menu', { display:'none' });
    searchStatus = 'closed';
  }
});
// Toggle open and close nav styles on click
// $('#nav-toggle').click(function() {
//   $('nav ul').slideToggle();
// });
$('header .desktop-nav .primary-navigation .hamburger-nav-dropdown .hamburger-menu li:first-child a').click(function(e) {
  gsap.set('header .desktop-nav .primary-navigation .hamburger-nav-dropdown .hamburger-menu li:first-child', { className:'+=active' });
  gsap.set('header .desktop-nav .primary-navigation .hamburger-nav-dropdown .hamburger-menu li:nth-child(2)', { className:'-active' });
  gsap.set('#hamburger-menu-about-info', { display:'flex' });
  gsap.set('#hamburger-menu-focus-area-info', { display:'none' });
});
$('header .desktop-nav .primary-navigation .hamburger-nav-dropdown .hamburger-menu li:nth-child(2) a').click(function(e) {
  gsap.set('header .desktop-nav .primary-navigation .hamburger-nav-dropdown .hamburger-menu li:first-child', { className:'-active' });
  gsap.set('header .desktop-nav .primary-navigation .hamburger-nav-dropdown .hamburger-menu li:nth-child(2)', { className:'+=active' });
  gsap.set('#hamburger-menu-about-info', { display:'none' });
  gsap.set('#hamburger-menu-focus-area-info', { display:'flex' });
});

//////// SEARCH PRIMARY NAVIGATION

$('header .desktop-nav .secondary-navigation .search').click(function(e) {
  gsap.set('header .desktop-nav .primary-navigation .primary-secondary-menu', { display:'none' });
  gsap.set('header .desktop-nav .secondary-navigation ul', { display:'none' });
  gsap.set('header .desktop-nav .primary-navigation .search-menu', { display:'flex' });
  $('header .desktop-nav .primary-navigation .search-menu input').focus();
  searchStatus = 'open';
  e.stopPropagation();
});

$('header .desktop-nav .primary-navigation .search-menu input').click(function(e) {
  gsap.set('header .desktop-nav .primary-navigation .primary-secondary-menu', { display:'none' });
  gsap.set('header .desktop-nav .secondary-navigation ul', { display:'none' });
  gsap.set('header .desktop-nav .primary-navigation .search-menu', { display:'flex' });
  searchStatus = 'open';
  e.stopPropagation();
});

//////// MOBILE PRIMARY NAVIGATION

$('header .mobile-nav .nav-menu .primary-navigation li:first-child a').click(function(e) {
  gsap.set('header .mobile-nav .nav-menu .primary-navigation', { display: 'none' });
  gsap.set('header .mobile-nav .nav-menu .secondary-navigation', { display: 'flex' });
  gsap.set('header .mobile-nav .nav-menu .secondary-navigation .about', { display: 'block' });
  gsap.set('header .mobile-nav .nav-menu .secondary-navigation .focus-area', { display: 'none' });
});

$('header .mobile-nav .nav-menu .secondary-navigation .about li:first-child a').click(function(e) {
  gsap.set('header .mobile-nav .nav-menu .primary-navigation', { display: 'flex' });
  gsap.set('header .mobile-nav .nav-menu .secondary-navigation', { display: 'none' });
  gsap.set('header .mobile-nav .nav-menu .secondary-navigation .about', { display: 'block' });
  gsap.set('header .mobile-nav .nav-menu .secondary-navigation .focus-area', { display: 'none' });
});

$('header .mobile-nav .nav-menu .primary-navigation li:nth-child(2) a').click(function(e) {
  gsap.set('header .mobile-nav .nav-menu .primary-navigation', { display: 'none' });
  gsap.set('header .mobile-nav .nav-menu .secondary-navigation', { display: 'flex' });
  gsap.set('header .mobile-nav .nav-menu .secondary-navigation .about', { display: 'none' });
  gsap.set('header .mobile-nav .nav-menu .secondary-navigation .focus-area', { display: 'block' });
});

$('header .mobile-nav .nav-menu .secondary-navigation .focus-area li:first-child a').click(function(e) {
  gsap.set('header .mobile-nav .nav-menu .primary-navigation', { display: 'flex' });
  gsap.set('header .mobile-nav .nav-menu .secondary-navigation', { display: 'none' });
  gsap.set('header .mobile-nav .nav-menu .secondary-navigation .about', { display: 'block' });
  gsap.set('header .mobile-nav .nav-menu .secondary-navigation .focus-area', { display: 'none' });
});

$('header .mobile-nav .search').click(function(e) {
  window.open('search-detail.html', '_self')
});
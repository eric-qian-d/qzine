function newNavbarItem(text, url) {
  itemLink = document.createElement('a');
  itemLink.className = 'nav-item nav-link';
  itemLink.innerHTML = text;
  itemLink.href = url;

  return itemLink
}


function renderNavbar(user) {
  const navbarDiv = document.getElementById('navbar-container');

  if (user._id) {
    navbarDiv.appendChild(newNavbarItem('Explore Recipes', '/explore.html'));    
    navbarDiv.appendChild(newNavbarItem(user.name+',\'s Searches', '/u/profile?'+user._id));
    navbarDiv.appendChild(newNavbarItem('Logout', '/logout'));
  } else {
    navbarDiv.appendChild(newNavbarItem('Login', '/auth/google'));
  }
}
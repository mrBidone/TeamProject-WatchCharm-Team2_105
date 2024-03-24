(() => {
  const navLinks = document.querySelectorAll(
    '.nav-link, .mobile-menu-nav-link'
  );

  navLinks.forEach(link => link.addEventListener('click', changeActive));

  function changeActive(e) {
    document
      .querySelectorAll('.is-active')
      .forEach(el => el.classList.remove('is-active'));
    document
      .querySelectorAll(
        `.nav-link[href="${e.target.attributes.href.value}"], .mobile-menu-nav-link[href="${e.target.attributes.href.value}"]`
      )
      .forEach(el => el.classList.add('is-active'));
  }
})();

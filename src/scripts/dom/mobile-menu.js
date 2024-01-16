const initMobileMenu = () => {
  const mobileMenuTrigger = document.querySelector('.mobile-menu__trigger');
  
  const onMobileTriggerClick = (e) => {
    console.log(e.currentTarget.closest('.mobile-menu'));
    e.currentTarget.closest('.mobile-menu').classList.toggle('is-open');
  }
  
  mobileMenuTrigger.addEventListener('click', onMobileTriggerClick);
}

export const updateMobileMenu = () => {
  
}

export default initMobileMenu;
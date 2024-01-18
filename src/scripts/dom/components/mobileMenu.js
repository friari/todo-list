import data from '../../data/activeData';

const populateMobileMenu = () => {
  const mobileMenuElem = document.querySelector('.mobile-menu__items');

  data.forEach(project => {
    let item = document.createElement('li');
    item.classList.add('mobile-menu__item');
    item.innerText = project.title;
    mobileMenuElem.appendChild(item);
  });
}

// TODO: addToMobileMenu function

const initMobileMenu = () => {
  const mobileMenuTrigger = document.querySelector('.mobile-menu__trigger');

  populateMobileMenu();
  
  const onMobileTriggerClick = (e) => {
    console.log(e.currentTarget.closest('.mobile-menu'));
    e.currentTarget.closest('.mobile-menu').classList.toggle('is-open');
  }
  
  mobileMenuTrigger.addEventListener('click', onMobileTriggerClick);
}


export default initMobileMenu;
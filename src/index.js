import styles from './styles/styles.css';
import initData from './scripts/data/initData.js';
import setActiveProject from './scripts/dom/functionality/setActiveProject.js';
import initMobileMenu, { updateMobileMenu } from './scripts/dom/components/mobileMenu.js';
import { createTodo } from './scripts/modules/todo.js';
import { createProject } from './scripts/modules/project.js';

initData();
setActiveProject();
initMobileMenu();
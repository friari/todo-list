import styles from './styles/styles.css';
import initData from './scripts/data/initData.js';
import initMobileMenu, { updateMobileMenu } from './scripts/dom/mobile-menu.js';
import { createTodo } from './scripts/modules/todo.js';
import { createProject } from './scripts/modules/project.js';

const data = initData();
initMobileMenu();
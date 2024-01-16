import styles from './styles/styles.css';
import initData from './scripts/data/initData.js';
import { storeData, fetchData, convertData } from './scripts/data/handleData.js';
import initMobileMenu, { updateMobileMenu } from './scripts/dom/mobile-menu.js';
import { createTodo } from './scripts/modules/todo.js';
import { createProject } from './scripts/modules/project.js';

let data = initData();
console.log(data);
storeData(data);
let fetchedData = fetchData();
convertData(fetchedData);
initMobileMenu();
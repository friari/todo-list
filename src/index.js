import { createTodo } from './modules/todo.js';
import { createProject } from './modules/project.js';

window.createTodo = createTodo;
window.createProject = createProject;

window.testTodoExisting = createTodo({ title: 'Already Existing Todo', priority: 'high', description: 'test description' });

window.testProject = createProject('Test');

console.log(testProject);
console.log(testProject.dueDate = new Date());
console.log(testTodoExisting);

let testDiv = document.createElement('div');
testDiv.innerText = "HELLO TESTING";

document.querySelector('main').append(testDiv);
// Global app controller
import num from './test';
import str from './models/Search';
import {add, multiply, ID} from './views/searchView';

console.log(`I imported ${num} from another module`);
console.log(`Hi ${str}`);

console.log(add(1, 2));
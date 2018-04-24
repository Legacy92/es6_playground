import { addToDom } from "./helpers";
import add from './add';
import SuperPerson from './person';

addToDom('<hr>');

const Bob = new SuperPerson('Bob', 'Sly Fox');
const Susie = new SuperPerson('Susie', 'Still Susie');

addToDom(Bob.speak('Hey there'));
addToDom(Susie.speak('Go float yourself Bob'));
addToDom(Susie.xRay());
addToDom(Bob.sayHeroName());
addToDom(Susie.sayHeroName());
console.log('App working: open app/index.js to start exploring ES6');

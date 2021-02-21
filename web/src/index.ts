import { User } from './models/User';
// import axios from 'axios';
const user1 = new User({ name: 'new record', age: 100 });

user1.on('change', () => {
console.log('it CHANGEDDD')
});
user1.trigger('change')

console.log(user1.get('age'))
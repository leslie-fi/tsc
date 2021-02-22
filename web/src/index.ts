import { User } from './models/User';
import { UserForm } from './views/UserForm';

let rootElement = document.getElementById('root');
const user = User.buildUser({name: 'NaTe', age: 31});
const userForm = new UserForm(rootElement, user);

userForm.render();

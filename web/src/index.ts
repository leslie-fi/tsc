import { User } from './models/User';
import { UserForm } from './views/UserForm';

const rootElement = document.getElementById('root');
const user = User.buildUser({ name: 'NaTe', age: 31 });

if (rootElement) {
  const userForm = new UserForm(rootElement, user);
  userForm.render();
} else {
  throw new Error('Root element not found');
}

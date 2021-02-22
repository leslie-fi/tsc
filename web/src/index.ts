import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const rootElement = document.getElementById('root');
const user = User.buildUser({ name: 'NaTe', age: 31 });

if (rootElement) {
  const userEdit = new UserEdit(rootElement, user);
  userEdit.render();
  console.log(userEdit)
} else {
  throw new Error('Root element not found');
}

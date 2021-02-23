import { User, UserProps } from './models/User';
// import { UserEdit } from './views/UserEdit';
import {UserList} from './views/UserList';
import {Collection} from './models/Collection'

const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
  return User.buildUser(json)
});

users.on('change', () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    new UserList(rootElement, users).render();
    console.dir('changed', users)
  } else {
    throw new Error('Root element not found');
  }
})

users.fetch();


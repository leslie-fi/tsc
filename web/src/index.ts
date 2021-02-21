import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const rootUrl = `http://localhost:3000/users`;

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.dir(collection.models);
});

collection.fetch();

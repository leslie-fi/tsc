import { User } from './models/User';

const user1 = new User({ name: 'robot1', age: 10 });

user1.save()

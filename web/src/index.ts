import { User } from './models/User';
import axios from 'axios';

const user1 = new User({ id: 2 });
user1.set({name: 'lisa marie joyce', age: 22})
// user1.save()
const newbUser = new User({ name: 'Wino4ever', age: 500 });

// newbUser.save();
user1.fetch()
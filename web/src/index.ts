import { User } from './models/User';

const user1 = User.buildUser({ name: 'robot4', age: 200 });
user1.on('change', () => console.log(`${user1} changed`))
user1.set({age: 30})
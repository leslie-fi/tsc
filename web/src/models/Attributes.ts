import {UserProps} from './User';
export class Attributes<T> {
  constructor(private data: T) {}

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

const attrs = new Attributes<UserProps>({
  id: 5,
  name: 'saasasd',
  age: 29
})
const name = attrs.get('age')
console.log(name)
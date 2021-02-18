import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import {LinkedList} from './LinkedList';
const numCollection = new NumbersCollection([-10, 3, -5, 0]);
const charCollection = new CharactersCollection('eyQuvAd1w');
const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(5)
linkedList.sort();
linkedList.print();
charCollection.sort();
console.log(charCollection)

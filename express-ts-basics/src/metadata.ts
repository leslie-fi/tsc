import 'reflect-metadata';
const plane = {
  color: 'red',
};

Reflect.defineMetadata('note', 'hi thar', plane, 'color')
const note = Reflect.getMetadata('note', plane, 'color');
console.log(note)

console.log('plane:', Reflect.getOwnMetadataKeys(plane, 'color'))
// ['note']

// Reflect.defineMetadata('note', 'hello thar', plane);

// console.log(plane);
// // result: { color: 'red' }

// const noteMd = Reflect.getMetadata('note', plane);
// console.log('metadata:', noteMd);
// // metadata: hello thar

// Reflect.defineMetadata('height', 10, plane);
// const height = Reflect.getMetadata('height', plane);
// const getMdKeys = Reflect.getMetadataKeys(plane);
// console.log('get md keys', getMdKeys);
// // [ 'note', 'height' ]

// const getOwnMdKeys = Reflect.getOwnMetadataKeys(plane);
// console.log('get own md keys', getOwnMdKeys);
// // [ 'note', 'height' ]

// console.log('note:', noteMd);
// // note: hello thar
// console.log('height:', height);
// // height: 10

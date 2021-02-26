import 'reflect-metadata';
const plane = {
  color: 'red'
}

Reflect.defineMetadata('note', 'hello thar', plane)

console.log(plane)
// result: { color: 'red' }
let md = Reflect.getMetadata('note', plane)

console.log('metadata:', md)
// metadata: hello thar
console.log('get md keys',Reflect.getMetadataKeys(plane))
// ['note']
console.log('get own md keys',Reflect.getOwnMetadataKeys(plane))
// ['note']
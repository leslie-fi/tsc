import 'reflect-metadata';

class Plane {
  color: string = 'red';

  @markFunction('hidden secret shh')
  fly(): void {
    console.log('vrrrrr')
  }
}

// factory decorator
function markFunction(secretInfo: string){
return function (target: Plane, key: string) {
  Reflect.defineMetadata('secret', secretInfo, target, key)
}
}
const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')

console.log(secret) // 'hidden secret shh'
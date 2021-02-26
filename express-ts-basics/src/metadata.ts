import 'reflect-metadata';
import { router } from './routes/loginRoutes';
 
class Plane {
  color: string = 'red';
 
  fly(): void {
    console.log('vrrrrr')
  }
}

function get(path:string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key)
  }
}

function controller(target:typeof Plane) {
  for (var key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key)
    const middleware = Reflect.getMetadata('middleware', target.prototype, key)
    
    router.get(path, target.prototype[key])
  }
}
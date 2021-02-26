"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Plane = /** @class */ (function () {
    function Plane() {
        this.color = 'red';
    }
    Plane.prototype.fly = function () {
        console.log('vrrrrr');
    };
    return Plane;
}());
// function get(path:string) {
//   return function (target: Plane, key: string) {
//     Reflect.defineMetadata('path', path, target, key)
//   }
// }
// function controller(target:typeof Plane) {
//   for (var key in target.prototype) {
//     const path = Reflect.getMetadata('path', target.prototype, key)
//     const middleware = Reflect.getMetadata('middleware', target.prototype, key)
//     router.get(path, target.prototype[key])
//   }
// }

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const plane = {
    color: 'red'
};
Reflect.defineMetadata('note', 'hello thar', plane);
console.log(plane);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
function hanoiTower(n, source, target, auxiliary) {
    if (n > 0) {
        hanoiTower(n - 1, source, auxiliary, target);
        target.push(source.pop());
        hanoiTower(n - 1, auxiliary, target, source);
    }
}
var source = new Stack_1.default();
var target = new Stack_1.default();
var auxiliary = new Stack_1.default();
var numDisks = 3;
for (var i = numDisks; i > 0; i--) {
    source.push(i);
}
hanoiTower(numDisks, source, target, auxiliary);
console.log('Target Stack:', target);

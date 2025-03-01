
import Stack from './Stack';

function hanoiTower(n: number, source: Stack<number>, target: Stack<number>, between: Stack<number>): void {
    if (n > 0) {
        hanoiTower(n - 1, source, between, target);
        target.push(source.pop()!);
        hanoiTower(n - 1, between, target, source);
    }
}

const source = new Stack<number>();
const target = new Stack<number>();
const between = new Stack<number>();

const numDisks = 3;
for (let i = numDisks; i > 0; i--) {
    source.push(i);
}

hanoiTower(numDisks, source, target, between);

console.log('Target Stack:', target);

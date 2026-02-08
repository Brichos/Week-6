import {strick as assert } from 'assert';
import { intersection } from './week6.mjs';

console.log('TEsting Array Intersection')

//Basic intersection
assert.deepEqual(intersection([1, 2, 3,], [2, 3, 4]), [2, 3]);
console.log('Basic intersection');

//No common elements
assert.deepEqual(intersection([1, 2], [3, 4]), []);
console.log('No common elements');
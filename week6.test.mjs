import { strict as assert } from 'assert';
import { intersection } from './week6.mjs';

const test = (description, fn) => {
  try {
    fn();
    console.log(`V ${description}`);
    return true;
  } catch (error) {
    console.log(`x ${description}`);
    console.log(`  ${error.message}`);
    return false;
  }
};

console.log('Testing Array Intersection')

let passed = 0;
let failed = 0;

//Basic intersection
if (test('Basic intersection', () => {
  const result = intersection([1, 2, 3], [2, 3, 4]);
  assert.deepEqual(result, [2, 3]);
})) passed++; else failed++;

//No common elements
assert.deepEqual(intersection([1, 2], [3, 4]), []);
console.log('No common elements');

// Empty arrays
assert.deepEqual(intersection([], [1, 2]), []);
assert.deepEqual(intersection([1, 2], []), []);
console.log('✓ Empty arrays');

// Duplicates removed
assert.deepEqual(intersection([1, 2, 2, 3], [2, 3, 3, 4]), [2, 3]);
console.log('✓ Duplicates removed');
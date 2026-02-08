import { strict as assert } from 'assert';
import { intersection } from './week6.mjs';

const test = (description, fn) => {
  try {
    fn();
    console.log(`✓ ${description}`);
    return true;
  } catch (error) {
    console.log(`✗ ${description}`);
    console.log(`  ${error.message}`);
    return false;
  }
};

console.log('Testing Array Intersection')

//Basic intersection
assert.deepEqual(intersection([1, 2, 3,], [2, 3, 4]), [2, 3]);
console.log('Basic intersection');

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
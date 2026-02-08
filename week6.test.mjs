import { strict as assert } from 'assert';
import { intersection, pipe } from './week6.mjs';

//Array tests

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
if (test('No common elements', () => {
  const result = intersection([1, 2], [3, 4]);
  assert.deepEqual(result, []);
})) passed++; else failed++;


// Empty arrays
if (test('Empty arrays', () => {
  assert.deepEqual(intersection([], [1, 2]), []);
  assert.deepEqual(intersection([1, 2], []), []);
})) passed++; else failed++;

// Duplicates removed
if (test('Duplicates removed', () => {
  const result = intersection([1, 2, 2, 3], [2, 3, 3, 4]);
  assert.deepEqual(result, [2, 3]);
})) passed++; else failed++;

//String test
if (test('String arrays', () => {
  const result = intersection(['a', 'b'], ['b', 'c']);
  assert.deepEqual(result, ['b']);
})) passed++; else failed++;

//Mixed types
if (test('Mixed types', () => {
  const result = intersection([1, '2', 3], ['2', 4]);
  assert.deepEqual(result, ['2']);
})) passed++; else failed++;

//Object refrences
if (test('Object references', () => {
  const obj = { id: 1 };
  const result = intersection([obj, { id: 2 }], [obj]);
  assert.deepEqual(result, [obj]);
})) passed++; else failed++;

console.log(`\n${passed} passed, ${failed} failed\n`);

if (failed > 0) {
  process.exit(1);
}



//Pipe tests

console.log('Testing Pipe Function');

// Helper functions for testing
const add5 = (x) => x + 5;
const multiply3 = (x) => x * 3;
const subtract2 = (x) => x - 2;
const double = (x) => x * 2;
const square = (x) => x * x;

//Basic pipe with two functions
if (test('Basic pipe with two functions', () => {
  const addThenMultiply = pipe(add5, multiply3);
  const result = addThenMultiply(10); // (10 + 5) * 3 = 45
  assert.equal(result, 45);
})) passed++; else failed++;
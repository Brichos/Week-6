import { strict as assert } from 'assert';
import { intersection, pipe, fibonacci } from './week6.mjs';

//Test function
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

let passed = 0;
let failed = 0;


//Array tests

console.log('Testing Array Intersection')

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

//Pipe with three functions
if (test('Pipe with three functions', () => {
  const transform = pipe(add5, multiply3, subtract2);
  const result = transform(10); // ((10 + 5) * 3) - 2 = 43
  assert.equal(result, 43);
})) passed++; else failed++;

//Single function in pipe
if (test('Single function in pipe', () => {
  const justDouble = pipe(double);
  const result = justDouble(5);
  assert.equal(result, 10);
})) passed++; else failed++;

//Empty pipe (identity function)
if (test('Empty pipe returns input unchanged', () => {
  const identity = pipe();
  const result = identity(42);
  assert.equal(result, 42);
})) passed++; else failed++;

//Pipe with many functions
if (test('Pipe with many functions', () => {
  const transform = pipe(add5, multiply3, subtract2, double, square);
  const result = transform(1); // (((((1 + 5) * 3) - 2) * 2) ^ 2) = 1024
  assert.equal(result, 1024);
})) passed++; else failed++;

//Different data types
if (test('Works with strings', () => {
  const upper = (s) => s.toUpperCase();
  const exclaim = (s) => s + '!';
  const transform = pipe(upper, exclaim);
  assert.equal(transform('hello'), 'HELLO!');
})) passed++; else failed++;

console.log(`\n${passed} passed, ${failed} failed\n`);

if (failed > 0) {
  process.exit(1);
}

//Fibonacci Tests
console.log('Testing Fibonacci Function\n');

//Base case F(0)
if (test('F(0) = 0', () => {
  assert.equal(fibonacci(0), 0);
})) passed++; else failed++;

//Base case F(1)
if (test('F(1) = 1', () => {
  assert.equal(fibonacci(1), 1);
})) passed++; else failed++;

//Small values
if (test('F(2) = 1', () => {
  assert.equal(fibonacci(2), 1);
})) passed++; else failed++;

if (test('F(3) = 2', () => {
  assert.equal(fibonacci(3), 2);
})) passed++; else failed++;

if (test('F(4) = 3', () => {
  assert.equal(fibonacci(4), 3);
})) passed++; else failed++;

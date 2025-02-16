function foo(a, b) {
  // Handle null or undefined values
  a = a === null || a === undefined ? 0 : a; 
  b = b === null || b === undefined ? 0 : b;
  return a + b; // Perform addition with default values
}

console.log(foo(1, null)); // Output: 1
console.log(foo(1, 2));   // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(null, null)); // Output: 0
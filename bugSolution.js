function foo(x) {
  if (Number.isNaN(x)) {
    return NaN; // Handle NaN explicitly
  } else if (x === null) {
    return 0; 
  } else if (x < 0) {
    return -1; 
  } else {
    return 1; 
  }
}

console.log(foo(NaN)); // Output: NaN
console.log(foo(null)); // Output: 0
console.log(foo(-1));  // Output: -1
console.log(foo(1));   // Output: 1
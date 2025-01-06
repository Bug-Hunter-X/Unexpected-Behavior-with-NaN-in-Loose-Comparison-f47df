# Unexpected Behavior with NaN in Loose Comparison

This repository demonstrates a subtle bug in JavaScript related to loose comparison (==) and the handling of NaN (Not a Number).  The `foo` function aims to categorize inputs as 0 for null, -1 for negative numbers, and 1 for positive numbers. However, due to the nature of NaN, it returns unexpected results. 

## Bug Description

The core issue lies in how JavaScript's loose equality operator treats NaN.  NaN is never equal to itself (NaN == NaN is false), which can lead to incorrect classifications. In this specific example, NaN is mistakenly categorized as a positive number, which would be contrary to what was expected.  This is a common pitfall for developers unfamiliar with the nuances of NaN handling in JavaScript. 

## Solution

The solution is straightforward.  Instead of using loose comparison, use strict equality (===) or leverage `Number.isNaN()` to explicitly check for NaN before any other comparisons.  The updated function avoids this issue by first checking for NaN explicitly and using strict equality in other branches of the `if-else` statements.

## How to Run

1. Clone this repository.
2. Open `bug.js` to see the original buggy code.
3. Open `bugSolution.js` to see the corrected code.
4. Run both files using a JavaScript runtime (e.g., Node.js): `node bug.js` and `node bugSolution.js`
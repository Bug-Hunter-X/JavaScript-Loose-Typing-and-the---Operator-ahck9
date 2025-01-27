# JavaScript Loose Typing and the + Operator

This repository demonstrates a common JavaScript pitfall involving type coercion and the `+` operator. JavaScript's dynamic typing, while flexible, can lead to unexpected results when combining different data types.

## The Bug

The `bug.js` file contains a simple function that adds two numbers. However, due to JavaScript's loose typing, the `+` operator behaves differently depending on the input types:

- When adding two numbers, it performs standard addition.
- When adding a number and a string, it performs string concatenation.
- When adding a boolean or a null, it coerces the values to numbers (true -> 1, false -> 0, null -> 0).
- Adding undefined results in NaN.

These behaviors can be difficult to anticipate and debug, particularly in larger codebases.

## The Solution

The `bugSolution.js` file provides a more robust solution using explicit type checking or the Number() function to ensure that arithmetic addition is performed regardless of the input types. 

This highlights the importance of careful type handling in JavaScript to avoid unexpected behavior.  Always validate inputs where data type is crucial, to prevent unexpected results. 
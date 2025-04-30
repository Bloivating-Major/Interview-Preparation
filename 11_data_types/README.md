# Question 11: What are the different data types in JavaScript?

## Initial Question
**Interviewer:** Can you explain the different data types in JavaScript and how to check for them?

**Expected Answer:**
JavaScript has 8 data types:

Primitive Types:
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

Reference Type:
8. Object (includes arrays, functions, dates, etc.)

## Follow-up Questions

**Interviewer:** What's the output of these typeof checks and why?
```javascript
console.log(typeof 42);
console.log(typeof "42");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});
```

**Expected Answer:**
```javascript
"number"
"string"
"boolean"
"undefined"
"object"     // Known JavaScript bug
"object"
"object"     // Arrays are objects
"function"   // Special case for functions
```

**Interviewer:** How would you properly check for different types in JavaScript?

**Expected Answer:**
```javascript
// Check for array
Array.isArray([]);           // true

// Check for null
value === null;              // true

// Check for NaN
Number.isNaN(NaN);          // true

// Check for object
typeof value === 'object' && value !== null;

// Check for specific type of object
value instanceof Date;       // true for dates
```

**Interviewer:** What's the difference between primitive and reference types in terms of comparison and assignment?

**Expected Answer:**
```javascript
// Primitives
let a = "hello";
let b = a;
a = "world";
console.log(b);  // "hello" (copy by value)

// References
let obj1 = {name: "John"};
let obj2 = obj1;
obj1.name = "Jane";
console.log(obj2.name);  // "Jane" (copy by reference)
```

## Common Pitfalls to Discuss
1. typeof null returning "object"
2. Array type checking
3. NaN comparisons
4. Object equality
5. Primitive vs Reference confusion

## Best Practices
1. Use appropriate type checking methods
2. Understand type coercion rules
3. Handle null/undefined properly
4. Use strict equality (===)
5. Be aware of reference vs value behavior
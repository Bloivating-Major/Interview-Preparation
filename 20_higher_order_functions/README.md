# Question 20: What are Higher-Order Functions?

## Initial Question
**Interviewer:** Can you explain what higher-order functions are in JavaScript and provide some examples?

**Expected Answer:**
Higher-order functions are functions that either:
1. Take one or more functions as arguments
2. Return a function as their result
3. Or both

They are a fundamental concept in functional programming and are possible in JavaScript because functions are first-class citizens (they can be treated as values).

Common examples in JavaScript include `map`, `filter`, `reduce`, and `forEach` array methods.

## Follow-up Questions

**Interviewer:** Can you provide examples of built-in higher-order functions in JavaScript and how they're used?

**Expected Answer:**
```javascript
// Array.prototype.map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// Array.prototype.filter
const evens = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evens); // [2, 4]

// Array.prototype.reduce
const sum = numbers.reduce(function(accumulator, current) {
    return accumulator + current;
}, 0);
console.log(sum); // 15

// Array.prototype.forEach
numbers.forEach(function(num) {
    console.log(num);
});

// setTimeout and setInterval
setTimeout(function() {
    console.log('Delayed message');
}, 1000);

// Promise methods
Promise.resolve(10)
    .then(function(value) {
        return value * 2;
    })
    .then(function(value) {
        console.log(value); // 20
    });
```

**Interviewer:** Can you implement your own higher-order function that creates specialized functions?

**Expected Answer:**
```javascript
// Higher-order function that creates a validator
function createValidator(validationFn, errorMessage) {
    return function(value) {
        if (!validationFn(value)) {
            return { isValid: false, error: errorMessage };
        }
        return { isValid: true, error: null };
    };
}

// Create specialized validator functions
const isNotEmpty = value => value !== null && value !== undefined && value !== '';
const isEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isPassword = value => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);

const validateRequired = createValidator(isNotEmpty, 'Field is required');
const validateEmail = createValidator(isEmail, 'Invalid email format');
const validatePassword = createValidator(isPassword, 'Password must be at least 8 characters with letters and numbers');

// Usage
console.log(validateRequired('')); // { isValid: false, error: 'Field is required' }
console.log(validateEmail('test@example.com')); // { isValid: true, error: null }
console.log(validatePassword('pass123')); // { isValid: false, error: 'Password must be...' }
```

**Interviewer:** How would you implement a function composition utility?

**Expected Answer:**
```javascript
// Compose function (right to left)
function compose(...functions) {
    return function(initialValue) {
        return functions.reduceRight((value, fn) => fn(value), initialValue);
    };
}

// Pipe function (left to right)
function pipe(...functions) {
    return function(initialValue) {
        return functions.reduce((value, fn) => fn(value), initialValue);
    };
}

// Example usage
const add10 = x => x + 10;
const multiply2 = x => x * 2;
const subtract5 = x => x - 5;

const transformCompose = compose(subtract5, multiply2, add10);
const transformPipe = pipe(add10, multiply2, subtract5);

console.log(transformCompose(5)); // ((5 + 10) * 2) - 5 = 25
console.log(transformPipe(5));    // ((5 + 10) * 2) - 5 = 25

// Real-world example: Data processing pipeline
const sanitizeInput = str => str.trim().toLowerCase();
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const addGreeting = str => `Hello, ${str}!`;

const formatName = pipe(sanitizeInput, capitalize, addGreeting);

console.log(formatName('  jOHN  ')); // "Hello, John!"
```

## Common Pitfalls to Discuss
1. Overusing higher-order functions, making code harder to read
2. Not handling edge cases in custom higher-order functions
3. Performance implications with large data sets
4. Confusion with 'this' binding in callbacks
5. Creating too many intermediate functions

## Best Practices
1. Use built-in higher-order functions when possible
2. Keep function signatures consistent
3. Use meaningful names for functions and parameters
4. Consider performance for large data operations
5. Combine with other functional programming techniques for cleaner code
# Question 19: What is Currying in JavaScript?

## Initial Question
**Interviewer:** Can you explain what currying is in JavaScript and provide an example?

**Expected Answer:**
Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. The curried function returns a new function for each argument until all arguments have been provided, at which point the original function is executed with all arguments.

Key characteristics:
1. Transforms a function with multiple arguments into a sequence of unary (single-argument) functions
2. Allows partial application of a function's arguments
3. Enables more reusable and composable code
4. Helps create specialized functions from more general ones

## Follow-up Questions

**Interviewer:** Can you implement a simple curry function?

**Expected Answer:**
```javascript
// Basic curry implementation
function curry(fn) {
    return function curried(...args) {
        // If enough arguments are provided, call the original function
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        
        // Otherwise, return a function that collects more arguments
        return function(...moreArgs) {
            return curried.apply(this, [...args, ...moreArgs]);
        };
    };
}

// Example usage
function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));     // 6
console.log(curriedAdd(1, 2)(3));     // 6
console.log(curriedAdd(1)(2, 3));     // 6
console.log(curriedAdd(1, 2, 3));     // 6
```

**Interviewer:** What are some practical use cases for currying?

**Expected Answer:**
```javascript
// 1. Creating specialized functions
const multiply = (a, b) => a * b;
const curriedMultiply = curry(multiply);
const double = curriedMultiply(2);
const triple = curriedMultiply(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// 2. Function composition
const compose = (f, g) => x => f(g(x));
const add10 = x => x + 10;
const multiplyBy5 = x => x * 5;
const transformValue = compose(add10, multiplyBy5);

console.log(transformValue(3));  // 10 + (3 * 5) = 25

// 3. Event handling with partial application
const handleEvent = curry((eventType, element, event) => {
    console.log(`Handling ${eventType} event on ${element.id}`);
    // Process event
});

const handleClick = handleEvent('click');
const handleButtonClick = handleClick(document.getElementById('myButton'));

document.getElementById('myButton').addEventListener('click', handleButtonClick);

// 4. Data validation
const validate = curry((validator, message, value) => {
    if (!validator(value)) {
        return message;
    }
    return null;
});

const isNotEmpty = value => value.trim().length > 0;
const isEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const validateNotEmpty = validate(isNotEmpty, 'Field cannot be empty');
const validateEmail = validate(isEmail, 'Invalid email format');

function validateForm(values) {
    const errors = {
        name: validateNotEmpty(values.name),
        email: validateEmail(values.email)
    };
    return errors;
}
```

**Interviewer:** What are the limitations or potential drawbacks of currying?

**Expected Answer:**
1. **Readability concerns**: Heavily curried code can be harder to read and understand, especially for developers not familiar with functional programming.

2. **Debugging challenges**: Error stack traces can be more difficult to interpret with curried functions.

3. **Performance overhead**: Creating multiple function closures adds a small performance cost.

4. **Fixed arity requirement**: Basic curry implementations require knowing the exact number of arguments in advance.

5. **Handling variable arguments**: Traditional currying doesn't work well with variadic functions (functions that accept a variable number of arguments).

```javascript
// Example of a limitation with variadic functions
function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}

// A basic curry function won't work with this
// because fn.length will be 0 for variadic functions
const curriedSum = curry(sum); // Doesn't work as expected
```

## Common Pitfalls to Discuss
1. Confusing currying with partial application
2. Overusing currying, making code harder to understand
3. Performance implications in performance-critical code
4. Issues with 'this' binding in curried methods
5. Debugging complexity in deeply curried functions

## Best Practices
1. Use currying for creating families of functions
2. Combine with composition for powerful data transformations
3. Consider readability when deciding to use currying
4. Document curried functions clearly
5. Use libraries like Lodash or Ramda for robust currying implementations
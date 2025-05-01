# Question 14: What are the Call, Apply, and Bind methods?

## Initial Question
**Interviewer:** Can you explain the purpose of call(), apply(), and bind() methods in JavaScript and how they differ?

**Expected Answer:**
These methods allow you to control the value of `this` in function execution:

1. `call()`: Invokes a function with a specified `this` value and arguments provided individually
2. `apply()`: Invokes a function with a specified `this` value and arguments provided as an array
3. `bind()`: Returns a new function with a specified `this` value, without executing the function

## Follow-up Questions

**Interviewer:** Can you demonstrate how each method works with an example?

**Expected Answer:**
```javascript
const person = {
    name: "John",
    greet: function(greeting, punctuation) {
        return `${greeting}, I'm ${this.name}${punctuation}`;
    }
};

const anotherPerson = { name: "Jane" };

// call - immediate execution with individual arguments
console.log(person.greet.call(anotherPerson, "Hello", "!")); 
// "Hello, I'm Jane!"

// apply - immediate execution with arguments as array
console.log(person.greet.apply(anotherPerson, ["Hi", "?"])); 
// "Hi, I'm Jane?"

// bind - returns new function with bound context
const greetJane = person.greet.bind(anotherPerson);
console.log(greetJane("Hey", ".")); 
// "Hey, I'm Jane."

// bind with preset arguments
const sayHelloJane = person.greet.bind(anotherPerson, "Hello");
console.log(sayHelloJane("!"));
// "Hello, I'm Jane!"
```

**Interviewer:** What happens if you pass null or undefined as the first argument to these methods?

**Expected Answer:**
```javascript
function showThis() {
    console.log(this);
}

// In non-strict mode:
showThis.call(null);  // Window object (browser) or global object (Node)
showThis.apply(undefined);  // Window object (browser) or global object (Node)
const boundFn = showThis.bind(null);
boundFn();  // Window object (browser) or global object (Node)

// In strict mode:
"use strict";
showThis.call(null);  // null
showThis.apply(undefined);  // undefined
const strictBoundFn = showThis.bind(null);
strictBoundFn();  // null
```

**Interviewer:** How would you use these methods to borrow methods from other objects?

**Expected Answer:**
```javascript
const calculator = {
    multiply: function(a, b) {
        return a * b;
    }
};

const scientific = {
    square: function(x) {
        // Borrowing multiply method
        return calculator.multiply.call(this, x, x);
    }
};

console.log(scientific.square(5)); // 25
```

## Common Pitfalls to Discuss
1. Forgetting that `bind` returns a new function without executing it
2. Not understanding the behavior with null/undefined in strict vs non-strict mode
3. Trying to rebind a function that's already bound
4. Confusion with arrow functions (they ignore these methods)
5. Performance implications of repeated binding

## Best Practices
1. Use `call` or `apply` for one-time function borrowing
2. Use `bind` for event handlers or callbacks that need specific context
3. Prefer arrow functions for maintaining lexical `this` in callbacks
4. Consider function composition instead of complex binding chains
5. Use method shorthand in objects instead of binding functions
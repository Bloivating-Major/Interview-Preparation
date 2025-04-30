# Question 12: What is an arrow function, and how is it different from a regular function?

## Initial Question
**Interviewer:** Can you explain what arrow functions are and their key differences from regular functions?

**Expected Answer:**
Key differences between arrow functions and regular functions:
1. Syntax is more concise
2. No binding of `this` (inherits from parent scope)
3. Can't be used as constructors
4. Don't have their own `arguments` object
5. Can't be used as methods when `this` refers to the object

## Follow-up Questions

**Interviewer:** How would you refactor these functions into arrow functions?
```javascript
function multiply(a, b) {
    return a * b;
}

function greet(name) {
    return `Hello, ${name}!`;
}

const obj = {
    items: [1, 2, 3],
    process: function() {
        this.items.forEach(function(item) {
            console.log(this.prefix + item);
        }.bind(this));
    },
    prefix: "Number: "
};
```

**Expected Answer:**
```javascript
const multiply = (a, b) => a * b;

const greet = name => `Hello, ${name}!`;

const obj = {
    items: [1, 2, 3],
    process() {
        this.items.forEach(item => console.log(this.prefix + item));
    },
    prefix: "Number: "
};
```

**Interviewer:** What happens in these scenarios and why?
```javascript
const Counter = () => {
    this.count = 0;
    this.increment = () => this.count++;
};
const counter = new Counter();

const calculator = {
    value: 0,
    add: () => {
        this.value++;
    }
};
calculator.add();
```

**Expected Answer:**
```javascript
// First scenario throws error:
// TypeError: Counter is not a constructor
// Arrow functions can't be used as constructors

// Second scenario:
// this.value remains undefined
// Arrow functions don't bind their own this
// this refers to the global scope (or undefined in strict mode)
```

## Common Pitfalls to Discuss
1. Using arrow functions as methods
2. Constructor usage
3. Event handlers with this
4. Arguments object access
5. Using bind/call/apply

## Best Practices
1. Use arrow functions for callbacks
2. Use regular functions for methods
3. Use arrow functions for short, pure operations
4. Avoid arrow functions for event handlers
5. Consider lexical this binding needs
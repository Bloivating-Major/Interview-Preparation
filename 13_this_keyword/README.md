# Question 13: What is the "this" keyword in JavaScript?

## Initial Question
**Interviewer:** Can you explain how the 'this' keyword works in JavaScript and its different contexts?

**Expected Answer:**
The `this` keyword refers to different values depending on where it's used:
1. In global context: refers to global object (window in browsers)
2. In object methods: refers to the object
3. In constructor functions: refers to the new instance
4. In event handlers: refers to the element that triggered the event
5. In arrow functions: inherits `this` from enclosing scope

## Follow-up Questions

**Interviewer:** What will be the value of 'this' in each case and why?
```javascript
const user = {
    name: "John",
    greet() {
        console.log(`Hello, ${this.name}!`);
    },
    arrowGreet: () => {
        console.log(`Hello, ${this.name}!`);
    },
    delayedGreet() {
        setTimeout(function() {
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    },
    delayedArrowGreet() {
        setTimeout(() => {
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    }
};

user.greet();
user.arrowGreet();
user.delayedGreet();
user.delayedArrowGreet();
```

**Expected Answer:**
```javascript
"Hello, John!"       // Regular method, this refers to user
"Hello, undefined!"  // Arrow function, this refers to global scope
"Hello, undefined!"  // Regular function in setTimeout loses this context
"Hello, John!"       // Arrow function preserves this from outer scope
```

**Interviewer:** How would you fix the `this` context in traditional functions?

**Expected Answer:**
```javascript
// Method 1: Using bind
setTimeout(function() {
    console.log(`Hello, ${this.name}!`);
}.bind(this), 1000);

// Method 2: Using that/self
const that = this;
setTimeout(function() {
    console.log(`Hello, ${that.name}!`);
}, 1000);

// Method 3: Using arrow function (modern approach)
setTimeout(() => {
    console.log(`Hello, ${this.name}!`);
}, 1000);
```

## Common Pitfalls to Discuss
1. Global this in strict mode
2. Method extraction losing context
3. Callback context
4. Event handler binding
5. Constructor function without new

## Best Practices
1. Use arrow functions for callbacks
2. Bind event handlers in constructor
3. Use class fields for methods
4. Understand implicit binding
5. Be consistent with this binding approach
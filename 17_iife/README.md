# Question 17: What is an IIFE (Immediately Invoked Function Expression)?

## Initial Question
**Interviewer:** Can you explain what an IIFE is and why it's useful in JavaScript?

**Expected Answer:**
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. It has two major parts:
1. A function expression wrapped in parentheses `(function(){...})`
2. The immediate invocation of that function with a second set of parentheses `()`

The syntax looks like this:
```javascript
(function() {
    // code here
})();

// or
(function() {
    // code here
}());
```

Key benefits:
1. Creates a private scope for variables
2. Avoids polluting the global namespace
3. Isolates code execution
4. Captures the state at the moment of definition

## Follow-up Questions

**Interviewer:** How would you use an IIFE to create private variables?

**Expected Answer:**
```javascript
const counter = (function() {
    // Private variable
    let count = 0;
    
    // Return an object with public methods
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getValue: function() {
            return count;
        }
    };
})();

console.log(counter.getValue()); // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(count); // ReferenceError: count is not defined
```

**Interviewer:** How would you pass parameters to an IIFE?

**Expected Answer:**
```javascript
// Passing arguments to an IIFE
(function(name, age) {
    console.log(`My name is ${name} and I am ${age} years old.`);
})('John', 30);

// Using global objects
(function(global, $) {
    // Now we have access to the global object and jQuery as $
    global.myApp = {
        version: '1.0.0'
    };
    
    $('.element').hide();
})(window, jQuery);
```

**Interviewer:** How have IIFEs been used historically and how has their usage changed with modern JavaScript?

**Expected Answer:**
**Historical Uses:**
```javascript
// Module pattern (pre-ES6)
var myModule = (function() {
    var privateVar = 'I am private';
    
    function privateMethod() {
        console.log(privateVar);
    }
    
    return {
        publicMethod: function() {
            privateMethod();
        }
    };
})();

// Avoiding variable hoisting issues
(function() {
    if (true) {
        var x = 10; // Scoped to the IIFE, not the if block
    }
    console.log(x); // 10
})();
```

**Modern JavaScript Alternatives:**
```javascript
// Block scoping with let/const
{
    let privateVar = 'I am private';
    const PI = 3.14159;
}
// privateVar and PI not accessible here

// ES6 modules
// file: module.js
const privateVar = 'I am private';
export const publicVar = 'I am public';

// ES6 classes with private fields (newer JS)
class Counter {
    #count = 0; // Private field
    
    increment() {
        this.#count++;
        return this.#count;
    }
    
    get value() {
        return this.#count;
    }
}
```

## Common Pitfalls to Discuss
1. Forgetting the wrapping parentheses
2. Confusion with function declarations vs expressions
3. Overuse leading to callback hell
4. Memory leaks from large closures
5. Debugging challenges with anonymous functions

## Best Practices
1. Use named IIFEs for better stack traces
2. Consider modern alternatives (modules, blocks with let/const)
3. Use IIFEs for polyfills and third-party library isolation
4. Keep IIFEs small and focused
5. Use arrow functions for simpler IIFEs when appropriate
# Question 6: What is a closure in JavaScript?

## Initial Question
**Interviewer:** Can you explain what a closure is in JavaScript and provide an example?

**Expected Answer:**
A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. It allows a function to:
- Access variables from its outer scope
- Maintain its own private state
- Remember the environment in which it was created

## Follow-up Questions

**Interviewer:** What would be the output of this code and why?
```javascript
function createCounter() {
    let count = 0;
    return {
        increment: function() { count++; return count; },
        getCount: function() { return count; }
    };
}

const counter1 = createCounter();
const counter2 = createCounter();
console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter2.increment()); // 1
```

**Expected Answer:**
- Each call to `createCounter()` creates a new closure with its own private `count` variable
- `counter1` and `counter2` maintain separate states
- The `count` variable is not accessible from outside the closure
- This demonstrates encapsulation and data privacy

**Interviewer:** How would you use a closure to create a private method?

**Expected Answer:**
```javascript
function createBank() {
    let balance = 0;
    
    function validateAmount(amount) {
        return amount > 0 && typeof amount === 'number';
    }
    
    return {
        deposit: function(amount) {
            if (!validateAmount(amount)) return 'Invalid amount';
            balance += amount;
            return balance;
        },
        getBalance: function() {
            return balance;
        }
    };
}
```

**Interviewer:** What's the potential memory impact of closures and how would you handle it?

**Expected Answer:**
Closures can lead to memory leaks if not handled properly because:
1. They maintain references to their outer scope
2. The garbage collector can't clean up these references
3. Large data structures in closures won't be freed

Solution:
```javascript
function heavyProcess() {
    let largeData = new Array(1000000);
    
    function processData() {
        // Process largeData
    }
    
    processData();
    largeData = null; // Clear the reference when done
}
```

## Common Pitfalls to Discuss
1. Memory leaks from large datasets in closures
2. Creating closures in loops
3. `this` binding in closures
4. Shared references between closures
5. Overuse of closures

## Best Practices
1. Clear references when no longer needed
2. Use closures for data privacy
3. Be mindful of memory usage
4. Understand closure scope chain
5. Use module pattern for organization
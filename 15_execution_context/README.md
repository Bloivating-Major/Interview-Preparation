# Question 15: What is Execution Context and Call Stack?

## Initial Question
**Interviewer:** Can you explain what execution context is in JavaScript and how the call stack works?

**Expected Answer:**
Execution context is the environment in which JavaScript code is evaluated and executed. Each context contains information about:

1. Variable Environment: Variables, functions, and arguments
2. Scope Chain: Access to variables in parent environments
3. `this` value: Reference determined by how a function is called

The call stack is a data structure that tracks the execution of functions:
- When a function is called, its execution context is pushed onto the stack
- When a function completes, its context is popped off the stack
- JavaScript is single-threaded and follows a Last In, First Out (LIFO) execution order

## Follow-up Questions

**Interviewer:** What are the different types of execution contexts in JavaScript?

**Expected Answer:**
There are three types of execution contexts:

1. **Global Execution Context**:
   - Created when script first loads
   - Provides global object (window in browsers, global in Node.js)
   - Sets `this` to the global object in non-strict mode

2. **Function Execution Context**:
   - Created when a function is invoked
   - Each function call gets its own execution context
   - Contains local variables and arguments

3. **Eval Execution Context**:
   - Created when code is executed in an eval function
   - Generally avoided due to security and performance concerns

**Interviewer:** Can you walk through what happens in the call stack with this code?

```javascript
function first() {
    console.log('Inside first function');
    second();
    console.log('Back to first');
}

function second() {
    console.log('Inside second function');
    third();
    console.log('Back to second');
}

function third() {
    console.log('Inside third function');
}

first();
```

**Expected Answer:**
1. Global execution context is created (call stack: [global])
2. `first()` is called, creating new execution context (call stack: [global, first])
3. Inside `first()`, logs "Inside first function"
4. `second()` is called, creating new execution context (call stack: [global, first, second])
5. Inside `second()`, logs "Inside second function"
6. `third()` is called, creating new execution context (call stack: [global, first, second, third])
7. Inside `third()`, logs "Inside third function"
8. `third()` completes, its context is removed (call stack: [global, first, second])
9. Back in `second()`, logs "Back to second"
10. `second()` completes, its context is removed (call stack: [global, first])
11. Back in `first()`, logs "Back to first"
12. `first()` completes, its context is removed (call stack: [global])

**Interviewer:** What happens when the call stack exceeds its size limit?

**Expected Answer:**
When the call stack exceeds its size limit, a "Maximum call stack size exceeded" error occurs (also known as a stack overflow). This typically happens with infinite or excessive recursion:

```javascript
function recursiveFunction() {
    recursiveFunction(); // No base case, will cause stack overflow
}

recursiveFunction();
```

To prevent this, ensure recursive functions have proper base cases:

```javascript
function safeRecursion(n) {
    if (n <= 0) return; // Base case
    console.log(n);
    safeRecursion(n - 1);
}
```

## Common Pitfalls to Discuss
1. Infinite recursion causing stack overflow
2. Confusion between execution context and scope
3. Not understanding variable hoisting in execution contexts
4. Callback queue vs call stack confusion
5. Misunderstanding closure creation in execution contexts

## Best Practices
1. Keep call stacks shallow when possible
2. Use proper tail calls for recursion (in supported environments)
3. Understand how closures relate to execution contexts
4. Be aware of how async operations interact with the call stack
5. Use async/await or promises for handling complex async flows
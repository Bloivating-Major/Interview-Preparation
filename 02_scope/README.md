# Question 2: What is Scope in JavaScript?

## Initial Question
**Interviewer:** Can you explain what scope is in JavaScript and the different types of scope?

**Expected Answer:**
Scope determines the accessibility of variables in JavaScript. There are three main types:
1. Global Scope
2. Function/Local Scope
3. Block Scope (introduced with ES6)

## Follow-up Questions

**Interviewer:** Look at this code snippet:
```javascript
var a = 1;
function outer() {
    var b = 2;
    function inner() {
        var c = 3;
        console.log(a, b, c);
    }
    inner();
    console.log(a, b);
    console.log(c); // What happens here?
}
outer();
```
What will be the output and why?

**Expected Answer:**
- `console.log(a, b, c)` inside inner() will print: 1, 2, 3
- `console.log(a, b)` in outer() will print: 1, 2
- `console.log(c)` will throw ReferenceError because 'c' is not accessible in outer()'s scope

**Interviewer:** How does scope chain work in JavaScript?

**Expected Answer:**
The scope chain is how JavaScript looks for variables:
1. First in the current scope
2. Then in the outer scope
3. Continues until it reaches the global scope
4. If not found, throws ReferenceError

**Interviewer:** What's the difference between lexical scope and dynamic scope?

**Expected Answer:**
- Lexical scope (used by JavaScript) is determined by where variables and functions are defined in the source code
- Dynamic scope is determined by where functions are called (JavaScript doesn't use this)

**Interviewer:** Consider this code:
```javascript
if (true) {
    let x = 1;
    var y = 2;
}
console.log(y);
console.log(x);
```
What happens and why?

**Expected Answer:**
- `console.log(y)` prints 2 because `var` is function-scoped
- `console.log(x)` throws ReferenceError because `let` is block-scoped

## Common Pitfalls to Discuss
1. Variable shadowing
2. Global scope pollution
3. Implicit global variables
4. Block scope vs Function scope confusion
5. Scope in loops

## Best Practices
1. Minimize use of global variables
2. Use block scope for better encapsulation
3. Be aware of closure scope
4. Understand hoisting's effect on scope
5. Use strict mode to prevent accidental globals
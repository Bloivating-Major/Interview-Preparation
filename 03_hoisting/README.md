# Question 3: Explain the concept of hoisting in JavaScript

## Initial Question
**Interviewer:** What is hoisting in JavaScript and how does it work?

**Expected Answer:**
Hoisting is JavaScript's default behavior of moving declarations to the top of their respective scopes during compilation phase. However, only declarations are hoisted, not initializations.

## Follow-up Questions

**Interviewer:** Consider this code:
```javascript
console.log(foo);
var foo = "bar";

console.log(baz);
let baz = "qux";
```
What happens in each case and why?

**Expected Answer:**
- First `console.log` prints `undefined` because `var` declaration is hoisted but not initialization
- Second `console.log` throws ReferenceError because `let` declarations are not hoisted (temporal dead zone)

**Interviewer:** How does hoisting work with function declarations vs function expressions?

**Expected Answer:**
```javascript
// Function Declaration
sayHello(); // Works!
function sayHello() {
    console.log("Hello");
}

// Function Expression
sayGoodbye(); // TypeError
var sayGoodbye = function() {
    console.log("Goodbye");
}
```
- Function declarations are completely hoisted (both declaration and definition)
- Function expressions are only hoisted as variables (if using var)

**Interviewer:** What happens in this scenario?
```javascript
var x = 1;
function foo() {
    console.log(x);
    var x = 2;
}
foo();
```
What will be logged and why?

**Expected Answer:**
`undefined` will be logged because:
1. Local variable `x` is hoisted within function scope
2. It shadows the global `x`
3. At point of console.log, local `x` exists but isn't initialized yet

## Common Pitfalls to Discuss
1. Variable hoisting vs function hoisting
2. Temporal Dead Zone with let/const
3. Function declarations vs expressions
4. Multiple var declarations
5. Hoisting in loops

## Best Practices
1. Always declare variables at the top of their scope
2. Use let/const instead of var to avoid hoisting issues
3. Declare functions before using them
4. Be aware of function declaration hoisting in conditional blocks
5. Understand temporal dead zone implications
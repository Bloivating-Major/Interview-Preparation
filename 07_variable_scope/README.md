# Question 7: What is the scope of a variable? Explain block, function, and global scope.

## Initial Question
**Interviewer:** Can you explain the different types of variable scope in JavaScript and how they work?

**Expected Answer:**
JavaScript has three main types of variable scope:

1. Global Scope:
   - Variables declared outside any function or block
   - Accessible everywhere in the application
   - Created using var, let, or const at the top level

2. Function Scope:
   - Variables declared inside a function
   - Only accessible within that function
   - Created using var, let, or const

3. Block Scope:
   - Variables declared inside a block (if, for, etc.)
   - Only accessible within that block
   - Created using let or const (not var)

## Follow-up Questions

**Interviewer:** What's the output of this code and why?
```javascript
var x = 1;
let y = 2;

function test() {
    var x = 10;
    let y = 20;
    {
        var x = 100;
        let y = 200;
        console.log(x, y);
    }
    console.log(x, y);
}

test();
console.log(x, y);
```

**Expected Answer:**
```javascript
// Inside block: 100, 200
// Inside function: 100, 20
// Global scope: 1, 2
```
Because:
- `var x` is function-scoped, so it's shared within the function
- `let y` is block-scoped, creating new variables in each scope
- Global variables remain unchanged

**Interviewer:** How does the module scope work in JavaScript?

**Expected Answer:**
Module scope provides a way to encapsulate variables:
```javascript
// module.js
let privateVar = 'secret';
export const publicVar = 'public';

export function getPrivate() {
    return privateVar;
}
```
- Variables in modules are scoped to that module
- Only exported items are accessible from outside
- Each module has its own scope

## Common Pitfalls to Discuss
1. Global scope pollution
2. Variable shadowing
3. Hoisting differences
4. Block scope vs Function scope
5. Module scope isolation

## Best Practices
1. Minimize global variables
2. Use block scope for better encapsulation
3. Understand variable lifecycle
4. Use modules for better organization
5. Be explicit about variable scope
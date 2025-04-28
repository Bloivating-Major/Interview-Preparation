# Question 1: What is the difference between var, let, and const?

## Initial Question
**Interviewer:** Can you explain the main differences between var, let, and const in JavaScript?

**Expected Answer:**
The main differences are:
1. `var` is function-scoped, while `let` and `const` are block-scoped
2. `var` can be redeclared and updated
3. `let` can be updated but not redeclared
4. `const` cannot be updated or redeclared
5. `var` is hoisted, `let` and `const` are not (they have temporal dead zone)

## Follow-up Questions

**Interviewer:** Let's dive deeper. Consider this code:
```javascript
console.log(x);
var x = 5;

console.log(y);
let y = 5;
```
What would happen and why?

**Expected Answer:**
- For `var x`: It will print `undefined` due to hoisting
- For `let y`: It will throw `ReferenceError` due to temporal dead zone

**Interviewer:** What about this scenario:
```javascript
const obj = { name: "John" };
obj.name = "Jane";
```
Will this throw an error? Why or why not?

**Expected Answer:**
No, it won't throw an error. While `const` prevents reassignment of the variable itself, it doesn't make the object immutable. You can still modify the object's properties.

**Interviewer:** In what situations would you prefer using `let` over `const`, or vice versa?

**Expected Answer:**
- Use `const` by default for better code readability and to prevent accidental reassignment
- Use `let` when you know the variable will need to be reassigned
- Common use cases for `let`: loop counters, accumulating values, temporary variables

**Interviewer:** How would you make an object declared with `const` completely immutable?

**Expected Answer:**
You can use `Object.freeze()`:
```javascript
const obj = Object.freeze({
    name: "John",
    age: 30
});
```
However, this only creates a shallow freeze. For deep immutability, you'd need to recursively freeze nested objects.

## Common Pitfalls to Discuss
1. Temporal Dead Zone
2. Block scope vs Function scope
3. Variable shadowing
4. Global object property with var
5. Const with objects/arrays

## Best Practices
1. Use `const` by default
2. Use `let` when rebinding is needed
3. Avoid `var` in modern JavaScript
4. Be aware of temporal dead zone
5. Consider using Object.freeze() when needed
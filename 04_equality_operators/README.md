# Question 4: What is the difference between == and === in JavaScript?

## Initial Question
**Interviewer:** Can you explain the difference between double equals (==) and triple equals (===) in JavaScript?

**Expected Answer:**
- `==` performs type coercion before comparison (loose equality)
- `===` compares both value and type without coercion (strict equality)
- `===` is generally preferred as it's more predictable and prevents unexpected type coercion

## Follow-up Questions

**Interviewer:** What would be the output of these comparisons and why?
```javascript
console.log(1 == '1');
console.log(1 === '1');
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);
```

**Expected Answer:**
```javascript
true  // == coerces string '1' to number 1
false // === checks type, number !== string
true  // == coerces false to 0
false // === checks type, number !== boolean
true  // == considers null and undefined equal
false // === checks type, null and undefined are different types
```

**Interviewer:** Consider this code:
```javascript
console.log([] == false);
console.log({} == {});
console.log([] === []);
```
What would be the output and why?

**Expected Answer:**
```javascript
true  // [] is converted to 0, false is converted to 0
false // Objects are compared by reference, not value
false // Arrays are objects, compared by reference
```

**Interviewer:** How would you properly compare two arrays or objects for equality?

**Expected Answer:**
For arrays:
```javascript
const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((value, index) => value === arr2[index]);
}
```
For objects:
```javascript
const areObjectsEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
    // Or use more robust solutions like Lodash's isEqual
}
```

**Interviewer:** What are some common gotchas with type coercion in JavaScript?

**Expected Answer:**
1. Empty arrays coerce to 0 in numeric contexts
2. Objects coerce to "[object Object]" in string contexts
3. `null` coerces to 0 in numeric operations
4. Empty string coerces to 0 in numeric operations
5. Special cases like `[] == ![]` evaluating to true

## Common Pitfalls to Discuss
1. Truthy/falsy confusion with ==
2. Object/array reference comparison
3. null/undefined equality
4. Type coercion rules
5. NaN comparisons

## Best Practices
1. Use === by default
2. Use == only when type coercion is explicitly desired
3. Be explicit about type conversions
4. Use proper methods for object/array comparison
5. Consider using Object.is() for special cases (NaN, -0)
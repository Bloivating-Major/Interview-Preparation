# Question 8: What is the difference between undefined and null?

## Initial Question
**Interviewer:** Can you explain the difference between undefined and null in JavaScript?

**Expected Answer:**
Key differences between undefined and null:
1. `undefined` means a variable has been declared but not assigned a value
2. `null` is an intentional assignment to represent "no value"
3. `typeof undefined` returns "undefined"
4. `typeof null` returns "object" (this is a known JavaScript bug)
5. `undefined` is automatically assigned, while `null` must be manually assigned

## Follow-up Questions

**Interviewer:** What would be the output of these comparisons?
```javascript
console.log(null == undefined);
console.log(null === undefined);
console.log(typeof null);
console.log(typeof undefined);
console.log(void 0 === undefined);
```

**Expected Answer:**
```javascript
true    // == performs type coercion
false   // === checks type, they are different types
"object" // Historical JavaScript bug
"undefined"
true    // void operator always returns undefined
```

**Interviewer:** In what scenarios would you use null vs undefined?

**Expected Answer:**
```javascript
// Use undefined when:
let variable; // Variable declaration without initialization
function greet(name) {
    // Optional parameter not provided
}

// Use null when:
let user = {
    name: "John",
    spouse: null  // Explicitly indicating no spouse
};

let cache = null; // Explicitly clearing an object reference
```

**Interviewer:** How would you safely check for both null and undefined?

**Expected Answer:**
```javascript
// Method 1: Using == (loose equality)
function isNullOrUndefined(value) {
    return value == null;
}

// Method 2: Explicit check
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}

// Method 3: Using typeof
function isNullOrUndefined(value) {
    return value === null || typeof value === 'undefined';
}
```

## Common Pitfalls to Discuss
1. Assuming `typeof null === 'null'`
2. Not handling both cases in optional chaining
3. Confusion with falsy values
4. Object property undefined vs null
5. Function return values undefined vs null

## Best Practices
1. Use undefined for unintentional absence of value
2. Use null for intentional absence of value
3. Always check for both in optional values
4. Be consistent with return values
5. Document your null/undefined conventions
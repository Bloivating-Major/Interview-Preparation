# Question 5: What are truthy and falsy values in JavaScript?

## Initial Question
**Interviewer:** Can you explain what truthy and falsy values are in JavaScript? What are all the falsy values?

**Expected Answer:**
Falsy values in JavaScript are:
1. `false`
2. `0`
3. `''` (empty string)
4. `null`
5. `undefined`
6. `NaN`

Everything else is truthy, including:
- All objects (even empty ones)
- All arrays (even empty ones)
- The string "false"
- Any non-zero number

## Follow-up Questions

**Interviewer:** What would be the output of these conditions and why?
```javascript
if ([]) console.log('empty array');
if ({}) console.log('empty object');
if ('0') console.log('string zero');
if (new Boolean(false)) console.log('boolean object');
```

**Expected Answer:**
All messages will be logged because:
- Empty arrays and objects are truthy (they're objects)
- String '0' is not empty, so it's truthy
- `new Boolean(false)` creates an object, which is truthy

**Interviewer:** How would you check if a value is truly empty?

**Expected Answer:**
```javascript
function isEmpty(value) {
    if (value === null || value === undefined) return true;
    if (typeof value === 'string') return value.trim().length === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return !value;
}
```

**Interviewer:** Consider this code:
```javascript
const value = '0';
if (value) {
    console.log('A');
}
if (!value) {
    console.log('B');
}
if (value == false) {
    console.log('C');
}
```
What gets logged and why?

**Expected Answer:**
- 'A' gets logged because '0' is truthy
- 'C' gets logged because '0' is coerced to 0 which equals false
- 'B' doesn't get logged because !value is false

## Common Pitfalls to Discuss
1. Assuming empty arrays/objects are falsy
2. Confusion with type coercion in conditions
3. Boolean objects vs boolean primitives
4. String '0' vs number 0
5. Checking for empty values

## Best Practices
1. Use explicit comparisons when possible
2. Be aware of type coercion in conditions
3. Use Boolean() for explicit conversion
4. Consider using dedicated empty checks for collections
5. Use strict equality when comparing with null/undefined
# Question 10: What is the difference between forEach, map, and filter?

## Initial Question
**Interviewer:** Can you explain the differences between forEach, map, and filter array methods in JavaScript?

**Expected Answer:**
Key differences:
1. `forEach`: Executes a function for each element, returns undefined
2. `map`: Creates a new array with results of calling a function for each element
3. `filter`: Creates a new array with elements that pass a test function

## Follow-up Questions

**Interviewer:** How would you refactor this code using map and filter?
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const result = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        result.push(numbers[i] * 2);
    }
}
```

**Expected Answer:**
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 2);
// result: [4, 8, 12]
```

**Interviewer:** What's the difference in behavior when using these methods with sparse arrays?

**Expected Answer:**
```javascript
const sparseArray = [1, , 3, , 5];

// forEach skips empty slots
sparseArray.forEach(item => console.log(item));
// Logs: 1, 3, 5

// map preserves empty slots
const mapped = sparseArray.map(x => x * 2);
// Result: [2, empty, 6, empty, 10]

// filter removes empty slots
const filtered = sparseArray.filter(x => x > 0);
// Result: [1, 3, 5]
```

**Interviewer:** How would you implement your own version of map?

**Expected Answer:**
```javascript
Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) { // Handle sparse arrays
            result[i] = callback(this[i], i, this);
        }
    }
    return result;
};
```

## Common Pitfalls to Discuss
1. Modifying array during iteration
2. Not understanding return values
3. Misusing forEach for transformations
4. Chaining methods inefficiently
5. Not considering sparse arrays

## Best Practices
1. Use map for transformations
2. Use filter for filtering
3. Use forEach for side effects
4. Chain methods appropriately
5. Consider performance with large arrays
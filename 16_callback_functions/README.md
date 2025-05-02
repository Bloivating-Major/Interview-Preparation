# Question 16: What are Callback Functions?

## Initial Question
**Interviewer:** Can you explain what callback functions are in JavaScript and why they're important?

**Expected Answer:**
A callback function is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of action or routine.

Key characteristics:
1. Functions are first-class objects in JavaScript
2. Callbacks enable asynchronous programming
3. They allow for more modular and reusable code
4. They're fundamental to event-driven programming

## Follow-up Questions

**Interviewer:** Can you provide examples of synchronous and asynchronous callbacks?

**Expected Answer:**
**Synchronous Callback:**
```javascript
// Array methods use synchronous callbacks
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function callback(num) {
    return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// Sort with a callback
numbers.sort(function callback(a, b) {
    return b - a;
});
console.log(numbers); // [5, 4, 3, 2, 1]
```

**Asynchronous Callback:**
```javascript
// Event listener
document.getElementById('button').addEventListener('click', function callback() {
    console.log('Button clicked!');
});

// setTimeout
setTimeout(function callback() {
    console.log('This executes after 2 seconds');
}, 2000);

// AJAX request
fetch('https://api.example.com/data')
    .then(function callback(response) {
        return response.json();
    })
    .then(function callback(data) {
        console.log(data);
    });
```

**Interviewer:** What is callback hell and how can you avoid it?

**Expected Answer:**
Callback hell (or "pyramid of doom") occurs when multiple nested callbacks create code that's difficult to read and maintain:

```javascript
// Callback hell example
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            getYetEvenMoreData(c, function(d) {
                getFinalData(d, function(finalData) {
                    console.log(finalData);
                });
            });
        });
    });
});
```

Ways to avoid callback hell:

1. **Use Promises:**
```javascript
getData()
    .then(a => getMoreData(a))
    .then(b => getEvenMoreData(b))
    .then(c => getYetEvenMoreData(c))
    .then(d => getFinalData(d))
    .then(finalData => console.log(finalData))
    .catch(error => console.error(error));
```

2. **Use async/await:**
```javascript
async function processData() {
    try {
        const a = await getData();
        const b = await getMoreData(a);
        const c = await getEvenMoreData(b);
        const d = await getYetEvenMoreData(c);
        const finalData = await getFinalData(d);
        console.log(finalData);
    } catch (error) {
        console.error(error);
    }
}
```

3. **Named functions:**
```javascript
function handleFinalData(finalData) {
    console.log(finalData);
}

function handleD(d) {
    getFinalData(d, handleFinalData);
}

function handleC(c) {
    getYetEvenMoreData(c, handleD);
}

function handleB(b) {
    getEvenMoreData(b, handleC);
}

function handleA(a) {
    getMoreData(a, handleB);
}

getData(handleA);
```

**Interviewer:** How would you implement a function that takes a callback with error handling?

**Expected Answer:**
```javascript
function fetchData(url, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

// Usage
fetchData('https://api.example.com/data', function(error, data) {
    if (error) {
        console.error('Error fetching data:', error);
        return;
    }
    console.log('Data received:', data);
});
```

## Common Pitfalls to Discuss
1. Callback hell/nested callbacks
2. Not handling errors properly
3. "this" context issues in callbacks
4. Forgetting to return values from callbacks
5. Race conditions with asynchronous callbacks

## Best Practices
1. Keep callbacks simple and focused
2. Use named functions for complex callbacks
3. Handle errors properly
4. Consider promises or async/await for complex async operations
5. Be mindful of the execution context (this binding)
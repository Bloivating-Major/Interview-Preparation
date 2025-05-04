# Question 18: What are Debounce and Throttle functions?

## Initial Question
**Interviewer:** Can you explain what debounce and throttle functions are, and when you would use each one?

**Expected Answer:**
**Debounce** and **throttle** are techniques to control how many times a function is executed over time.

**Debounce**: Delays function execution until after a certain amount of time has passed since the last time it was invoked. If the function is called again before the delay period, the timer resets.
- Use case: Search input, resize events, form validation

**Throttle**: Ensures a function is called at most once in a specified time period. It will execute immediately, then wait for the specified time before it can be executed again.
- Use case: Scroll events, game loops, continuous button presses

## Follow-up Questions

**Interviewer:** Can you implement a basic debounce function?

**Expected Answer:**
```javascript
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        const context = this;
        
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

// Usage example
const handleSearch = debounce(function(event) {
    console.log('Searching for:', event.target.value);
    // API call or search logic
}, 500);

document.getElementById('search').addEventListener('input', handleSearch);
```

**Interviewer:** Now, can you implement a throttle function?

**Expected Answer:**
```javascript
function throttle(func, limit) {
    let inThrottle = false;
    
    return function(...args) {
        const context = this;
        
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

// Usage example
const handleScroll = throttle(function() {
    console.log('
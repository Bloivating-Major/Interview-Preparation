# Question 9: What are template literals in JavaScript?

## Initial Question
**Interviewer:** Can you explain what template literals are and how they differ from regular strings?

**Expected Answer:**
Template literals are string literals that allow:
1. Multiline strings without escape characters
2. String interpolation with embedded expressions
3. Tagged templates for string transformation
4. Backtick (`) syntax instead of quotes

## Follow-up Questions

**Interviewer:** How would you refactor this code using template literals?
```javascript
const name = "John";
const age = 30;
const message = "My name is " + name + " and I am " + age + " years old.\n" +
                "I will be " + (age + 1) + " next year.";
```

**Expected Answer:**
```javascript
const name = "John";
const age = 30;
const message = `My name is ${name} and I am ${age} years old.
I will be ${age + 1} next year.`;
```

**Interviewer:** Can you explain tagged templates and provide an example?

**Expected Answer:**
```javascript
function highlight(strings, ...values) {
    let result = '';
    strings.forEach((string, i) => {
        result += string;
        if (i < values.length) {
            result += `<span class="highlight">${values[i]}</span>`;
        }
    });
    return result;
}

const name = "John";
const role = "developer";
const html = highlight`${name} is a ${role}`;
// Result: "<span class="highlight">John</span> is a <span class="highlight">developer</span>"
```

**Interviewer:** How would you handle expressions and nested templates?

**Expected Answer:**
```javascript
const data = {
    user: {
        name: "John",
        skills: ["JS", "React"]
    }
};

const template = `
    <div>
        <h1>${data.user.name}</h1>
        <ul>
            ${data.user.skills.map(skill => `
                <li>${skill}</li>
            `).join('')}
        </ul>
    </div>
`;
```

## Common Pitfalls to Discuss
1. Forgetting to escape backticks
2. Complex expressions in interpolation
3. Performance with large string concatenations
4. Nested template handling
5. Tagged template complexity

## Best Practices
1. Use for complex string interpolation
2. Keep expressions simple and readable
3. Consider tagged templates for HTML
4. Use for multiline strings
5. Handle escaping in tagged templates
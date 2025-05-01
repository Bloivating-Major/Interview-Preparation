// this keyword is more suspensful keyword in javascript
// value of this changes like a chammelion in different different senarios

// Global - Window
// Function - Window
// Method - object
// Function inside a Method (es5) - Window
// Function inside a Method (es6) - Object
// Constructor Function - New Blank Object
// Event Listener - Element on which event listener is applied

// Global - Window
console.log(this); // Window Object

// Function - Window
function myFunc() {
    console.log(this);
}
myFunc(); // Window Object

// Method - object
var obj = {
    name: "John",
    myMethod: function() {
        console.log(this);
    }
};
obj.myMethod(); // obj Object

// Function inside a Method (es5) - Window
var obj2 = {
    name: "John",
    myMethod: function() {
        function innerFunc() {
            console.log(this);
        }
        innerFunc();
    }
};
obj2.myMethod(); // Window Object

// Function inside a Method (es6) - Object
var obj3 = {
    name: "John",
    myMethod: function() {
        const innerFunc = () => {
            console.log(this);
        };
        innerFunc();
    },
    testMethod :()=>{
        console.log(this)
        const innerTest = () =>{
            console.log(this);
        }
        innerTest();
    }
};
obj3.myMethod(); // obj3 Object
obj3.testMethod(); // Window Object



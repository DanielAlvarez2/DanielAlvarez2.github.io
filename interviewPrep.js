let quiz = 
[
    {
    q:`what is the HTML syntax to connect a css file?
       <input type="text" 
       style="margin-top:15vh;text-align:center;">
    `,
    a:`&lt;link rel="stylesheet" href="styles.css">`
    },

    {
    q:`what does N.P.M. stand for?
        `,
    a:`Node Package Manager`
    },

    {
    q:`how do you start a node project?<br>
    <div style="margin-top:15vh;width:100%;text-align:center;">$ 
        <input type="text"
        style="text-align:left;width:10ch;">
    </div>
    `,
    a:`$ npm init -y`
    },

    {
    q:`what is the syntax to start at the top of the page?
    <div style="margin-top:15vh;width:100%;text-align:center;"> 
       <input type="text" 
       style="margin-top:15vh;text-align:center;width:35ch;">
    </div>
      `,
       a:`window.onunload = window.scrollTo(0,0)`
    },

    {
        q:`what is git?`,

        a:`a version control system`
    },

    {
        q:`what is the syntax for media queries?
        <div style="margin-top:15vh;width:100%;text-align:center;"> 
       <input type="text" 
       style="margin-top:15vh;
       text-align:center;
       width:25ch;">
    </div>
        `,

        a:`@media (min-width:700px){}`
    },

    {
        q:`what is the syntax to center a div with grid?
        <div style="margin-top:15vh;width:100%;text-align:center;"> 
            <textarea rows="2" cols="22"></textarea>
        </div>
        `,

        a:`display: grid;<br>
           place-content: center;`
    },

    {
        q:`what are the 2 categories of data types?`,

        a:`Primitives / Reference`
    },

    {
        q:`what are the 7 primitive data types?`,

        a:` String<br><br>
            Number<br><br>
            Boolean<br><br>
            Null<br><br>
            Undefined<br><br>
            BigInt<br><br>
            Symbol<br><br>
        
        `
    },

    {
        q:`what are the 6 falsy values?`,

        a:` null<br><br>
            undefined<br><br>
            false<br><br>
            NaN<br><br>
            0<br><br>
            "" (empty string)<br><br>
       
        `
    },

    {
        q:`what is the syntax for an IIFE?
        
           <div style="width:100%;
                       text-align:center;
                       margin-top:15vh;">
                <input style="width:12ch">
           </div>
        `,

        a:`(function(){})()`
    },

    {
        q:`Explain the "this" keyword`,

        a:`The "this" keyword refers to:<br>
        the global object/window in standalone functions<br>
        OR<br>
        the associated object in method calls
        `
    },

    {
        q:`what is the UNIX Epoch?`,

        a:`Jan 1 1970`
    },

    {
        q:`what is Jan 1 1970?`,

        a:`Unix Epoch`
    },

    {
        q:`what does A.P.I. stand for?`,

        a:`Application Programming Interface`
    },

    {
        q:`if a function is called using the "new" keyword, "this" is:`,

        a:`a brand new object`
    },

    {
        q:`if "call/apply/bind" are used to call a function, "this" will be:`,

        a:`the object passed in as the argument`
    },

    {
        q:`if a function is called as a method: obj.method() then "this" will be:`,

        a:`obj (whatever is left of dot ".")`
    },

    {
        q:`if a function is called as a standalone function, "this" will be:`,

        a:`browser: window object<br><br>node: global object`
    },

    {
        q:`what is "this" in an arrow function?`,

        a:`"this" value of its surrounding scope at the time it is created(enclosing lexical scope)`
    },

    {
        q:`in strict mode ('use strict') what is "this" for a standalone function call?`,

        a:`undefined`
    },

    {
        q:`does "call/apply/bind" affect "this" in arrow functions?`,

        a:`no`
    },

    {
        q:`what is Javascript?`,

        a:`event-driven<br>
           multi-paradigm<br>
           dynamically-typed<br>
           single-threaded
           `
    },

    {
        q:`how do you access an object's prototype?`,

        a:`obj.__proto__`
    },

    {
        q:`what is the difference between 'null' and 'undefined'?`,

        a:`'undefined' is the default value when a variable is declared without being assigned a value.<br><br>
        
        'null' is when a variable has explicitly been assigned that value.`
    },

    {
        q:`what is a closure?`,

        a:`A closure is when 2 functions are nested 1 inside the other.<br>
        The inner function still has access to the outer function's variables,<br>
        even AFTER the outer function has returned.`
    },

    {
        q:`what is the main difference between a .forEach loop and .map()?`,

        a:`.map() returns a NEW array, while .forEach does not`
    },

    {
        q:`what is a typical use case for anonymous functions?`,

        a:`IIFEs, callback functions used only once`
    },

    {
        q:`what is the difference between == and === ?`,

        a:`== only checks equality of values<br>
        === also checks for equality of TYPES`
    },

    {
        q:`why is it called a TERNARY expression?<br><br>
        what does the word TERNARY imply?`,

        a:`Unary, Binary, Ternary<br><br>1, 2, 3<br><br>
        Ternary indicates 3<br><br>
        A Ternary Expression accepts THREE operands:<br><br>
        - the test condition<br>
        - the "then" expression<br>
        - the "else" expression
        `
    },

    {
        q:`explain 'use strict'`,

        a:`'use strict' enables strict mode for entire scripts or just indivdual functions<br><br>
        - prevents creation of GLOBAL variables
        - forces assignments that would silently fail will throw an error`
    },

    {
        q:`FIZZ BUZZ<br><br>
            create a function that counts from 1 to 100<br>
            replace "FIZZ" at multiples of 3<br>
            replace "BUZZ" at multiples of 5<br>
            replace "FIZZ BUZZ" at multiples of 3 AND 5`,

        a:`function fizzbuzz(){

        }`
    },

    {
        q:`explain Promises`,

        a:`A promise is an object that MAY return a value in the future:<br>
        either a resolved value, or a reason it was not resolved(network error)<br>
        A promise can be in one of three states:<br>
        - pending<br>
        - fulfilled<br>
        - rejected`
    }



    
    
        
]





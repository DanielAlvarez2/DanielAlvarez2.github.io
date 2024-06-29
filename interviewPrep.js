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
            replace "FIZZ BUZZ" at multiples of 3 AND 5<br>
            code on: jsbin.com`,

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
    },

    {
        q:`write a function 'duplicate' that does this:<br>
        duplicate([1,2,3]) //[1,2,3]<br><br>
        plain JavaScript:<br><textarea rows='4'></textarea><br><br>
        ES6:<br><textarea></textarea>`,

        a:`function duplicate(arr){<br>
            &nbsp;&nbsp;return arr.concat(arr)<br>
        }<br><br>
        duplicate([1,2,3])<br><br><br>
        
        const duplicate = arr => [...arr,...arr]<br><br>
        duplicate([1,2,3])`
    },

    {
        q:`why should variables NOT be declared globally?`,

        a:`to avoid other developers accidentally using the same 
        variable names resulting in overwriting of variables.
        Using IIFEs resolves this.`
    },

    {
        q:`which is a function DECLARATION?<br><br>
        <div>
        <input type='radio' id='one' name='declaration'>
        <label for='one'>function x(){}</label>
        </div><br>
        <div>
        <input type='radio' id='two' name='declaration'>
        <label for='two'>const x = function(){}</label>
        </div>`,
    
        a:`function DECLARATION<br><br>function x(){}`
    },

    {
        q:`which is a function DECLARATION?<br><br>
        <div>
        <input type='radio' id='two' name='declaration'>
        <label for='two'>const x = function(){}</label>
        </div><br>
        <div>
        <input type='radio' id='one' name='declaration'>
        <label for='one'>function x(){}</label>
        </div>`,
    
        a:`function DECLARATION<br><br>function x(){}`
    },

    {
        q:`which is a function EXPRESSION?<br><br>
        <div>
        <input type='radio' id='two' name='declaration'>
        <label for='two'>const x = function(){}</label>
        </div><br>
        <div>
        <input type='radio' id='one' name='declaration'>
        <label for='one'>function x(){}</label>
        </div>`,
    
        a:`function EXPRESSION<br><br>const x = function(){}`
    },
    
    {
        q:`which is a function EXPRESSION?<br><br>
        <div>
        <input type='radio' id='one' name='declaration'>
        <label for='one'>function x(){}</label>
        </div><br>
        <div>
        <input type='radio' id='two' name='declaration'>
        <label for='two'>const x = function(){}</label>
        </div>`,
    
        a:`function EXPRESSION<br><br>const x = function(){}`
    },
    
    {
        q:`what behaves differently between a function declaration 
        vs a function expression?`,

        a:`function declarations are HOISTED, while function expressions are not.`
    },

    {
        q:`what is a higher-order function?`,

        a:`HIGHER-ORDER FUNCTION:<br>
        takes in a function as an argument and/or returns a function.`
    },

    {
        q:`what are the 4 pillars of OOP?`,

        a:`4 PILLARS OF OOP:<br><br>
        - abstraction<br><br>
        - encapsulation<br><br>
        - inheritance<br><br>
        - polymorphism`
    },

    {
        q:`OOP / explain abstraction`,

        a:`OOP / ABSTRACTION:<br><br>
        hiding unneccesary details from the user, 
        while displaying only neccesary information`
    },

    {
        q:`OOP / explain encapsulation`,

        a:`OOP / ENCAPSULATION<br><br>
        bundling both DATA together with<br>
        the METHODS that operate on that data.
        Hiding values or state preventing unauthorized access`
    },

    {
        q:`OOP / explain inheritance`,

        a:`OOP / INHERITANCE:<br><br>
        basing an object or class upon another object or class, 
        retaining similar implementation<br><br>
        ANIMAL --> dog & cat`
    },

    {
        q:`OOP / explain polymorphism`,

        a:`OOP / POLYMORPHISM:<br><br>
        "MANY" "FORMS"<br>
        a function can behave differently based on the context 
        in which it was invoked<br><br>
        function add(1,2) //3<br><br>
        function add(1,2,3) //6`
    },

    {
        q:`how do you prevent random whitespace<br>
           in &lt;textarea> field?`,

        a:`in the html file:<br>
           you must code the closing tag<br>
           on the same line as the opening tag<br>
           &lt;textarea>&lt;/textarea><br><br>
           NOT<br><br>
           &lt;textarea><br>
           &lt;/textarea>`
    },

    {
        q:`explain ...spread vs ...rest operators`,
        a:`???`
    },

    {
        q:`explain recursion`,
        a:`RECURSION:<br>
           a function that calls itself`
    },

    {
        q:`slice() vs splice<br>which modifies original array?`,
        a:`splice()<br>modifies original array`
    },

    {
        q:`arr=[1,2,3]<br><br>
           add 0 to the beginning of the array<br><br>
           <input type=text>`,
        a:`arr.unshift(0)<br><br>
           arr=[0,1,2,3]`
    },

    {
        q:`arr=[0,1,2,3]<br><br>
           remove 0 from the beginning of the array<br><br>
           <input type='text'>`,
        a:`arr.shift()<br><br>
           arr=[1,2,3]`
    },

    {
        q:`arr=[1,2,3]<br><br>
        add 4 to the end of the array<br><br>
        <input type=text>`,
     a:`arr.push(4)<br><br>
        arr=[1,2,3,4]`
    }
    
    
    


    
    
        
]





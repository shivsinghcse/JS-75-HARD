# Day-01

## What is JavaScript?
JavaScript (JS) is a programming language that makes web pages interactive. It can:
- Change website content dynamically.
- Respond to user actions like clicks and keyboard input.
- Communicate with servers to fetch or send data.

> In simple words, HTML is the structure, CSS is the design, and JavaScript is the brain of a
webpage


---
## Why do we use JavaScript?

## Use case of JavaScript:
JavaScript is used to make websites interactive, automate tasks, and build applications. Here are
some key reasons:

1. **Adds Interactivity** - Makes websites dynamic (e.g., sliders, pop-ups, animations).
2. **Handles User Input** - Validates forms, handles button clicks, etc.
3. **Fetches Data** - Loads new content without reloading the page (e.g., social media feeds).
4. **Game Development** - Used to create web-based games.
5. **Backend Development** - JavaScript (via Node.js) can run on servers too.
6. **Mobile and Desktop Apps** - Frameworks like React Native and Electron allow building mobile and
desktop apps.

---
## Use Cases of JavaScript:

- **Form Validation** -
Checking if an email is entered correctly before submitting a form.
- **Animation** -
Creating smooth effects like fading in/out or moving elements.

- **Real-Time Updates** -
Chat applications (e.g., WhatsApp Web)

- **Fetching Data** -
Loading news articles without reloading the page.

- **Games** -
Browser games like 2048 or Flappy Bird.

- **E-commerce Features** - 
Adding/removing products in a shopping cart dynamically.
---


# DAy-03
<!-- 
js is a client side programming language.
statement/instruction
output stmt in js:
    window.alert()
    console.log()
    document.write()
    .innerHTML

data - number, string, character   

compiler - compile | interpretor - iterpret

keywords in js
variable - to store data in ram
= assignment operator

x = 5; // why not error ???
        console.log(x);

        var x = 10; // var is specifier
        console.log(x); 
-->


# Day-04
<!-- 
why alert() shows first
Data - 
    number - 0-9
    character - 'a', '@', '#'
    string - apple, code, jsvascript

variable - to store data in ram temporaryly  
variable stores reference of the data , is a way to store data in ram   

keyword /  reserved word
there are some predefine words in language which compiler/interprator already knows called keyword

list of keyword in js
-->

# Day-05
<!-- 
not defined - Reference error
DRY - do not repeat yourself
variable helps in memory effency
variable declaration, initialization
no initialization no memory in ram
, operator in console.log()
every stmt ends with ; but optional in js
/*
multi line
comment
*/

// single line comment

compiler and interpretor ignores comments
console.warn()
console.error()

-->

# Day-06
<!-- 
function - is a way to block our code
function declartion/defination
function call

function type:
    1. built-in function or pre-defined function
        ex- window.alert(), window.print(), console.log(), document.write()
    2. user defined function

variable and function name mustbe descriptive
in js follow camelCase convention
lowercase, UPPERCASE, SnakeCase, camelCase
space not allowed in variable and function name   
js is case-sensitive language 
-->

# Day-07
<!-- 
keywords:
    var, function,

event - perform any action from mouse or keyboard ex- mouse click, keypress,  
event ex-
    onclick - mouse left button
    ondblclick - double click on mouse left button
    oncontextmenu - mouse right button
    keydown
    keyup
    keypress
    onchange
    oninput
    onfocus
    onfocusout
    onload
in tag we write event as an attribute
-->

# Day-08
<!-- 
events:
    onmousedown
    onmouseover
    onmouseout

Scope:
    Global scope | Global variable - outside function
    Local scope | Local variable    - inside function

parameter - variable in function declaration
argument - actual data during function call 
call by value   
if not pass argument undefined
default parameter - assign default value in function declaration
-->

# Day-09

<!--
const - can not update, initialize at the time of declaration

arrow function - comes in ES6
if you pass this as an argument it give the current element in function parameter
.innerHTML, innerText, textContent property
function and method same

accessing attribute value
    console.log(elem.name); - this will give undefined in case of custom attributes only works for default html attributes
    console.log(elem.getAttribute("name"));


    same with setAttribute
-->

# Day-10

target <=> name
return -> terminate the function execution

# Day-11
<!-- 
DOM - 
    Document - webpage
    Object - js object
    Model - Map
    map of webpage in object format
    js process it in tree format

to control dom we have some functions
DOM is a programming interface
html document ko jab js tree format me process krta hai aur use modify krne k liye function provide krta hai.

DOM is an API which helps to manipulate pages content.


document.title - changes page title
Selectors:
    document.getElementById("id") -> return an element / null
    .getElementsByTagName("tagname") -> returns HTMLCollection
Property:
    .innerHTML - read and update text or html child
    .innerText
    .textContent
    .style - to change/apply style/css
    .backgroundColor
    .color
    .padding etc

-->

# Day-12
<!-- 
document - body tag
Selectors:
    getElementById()
property:
    .innerHTML
    .style
-->

# Day-13

const changeStyle = (property, value) => {
const resultEle = document.getElementById("result");
resultEle.style[property] = value;
}

# Day-14
button - default value of type attribute : submit
type="button" it will not submit form 
type="reset" clear form data
<button type="button">Submit</button>
<input type="reset" value="clear">
name attribute is must
onsubmit event in form
if you are reading form data so you have to prevent page reload on form submit for that we pass event keyword which send onsubmit event and then use event.preventDefault() 

event.taget - gives the form

onsubmit event used in form
onchange - file select color select

box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
width: fit-content



# Day-52 : School management app (Setup)
- Tailwind CSS cdn
- Remix icon
- Animate.css
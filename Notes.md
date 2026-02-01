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
lowercase, UPPERCASE, Snake_Case (abc_cds), camelCase, PascalCase
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

# Day-15
clamp() in css
in form input always add name attribute
can access form value using getElementById
can access form value event.target[0].value
const login = (e) => {
            e.preventDefault();
            const username = e.target[0].value;
            const password = e.target[1].value;

            console.log(username, password);
        }

taget will give form element as a HTMLCollection
can use this in case of form also       

e.target.elements.username(value of name attribute)
console.log(e.target.elements.username);
elements gives a HTMLCollection which has all form element with indexing and also all element which has name attribute and length property which has value as total form element.

flex-grow: 1 takes all remaining space

createElement()
setAttribute()
click()

# Day-16
- External js file
- folder structure - a folder for js and another for css
- element.className = "fff"
- element.classList.add()
- element.classList.remove()

# Day-17

event:
    - onanimationend - apply in animated element, when animation end it will executes

# Day - 18    
Data Structure : way of grouping and managing data for better logic and performance.
need of dta structure: to handle data systematically, especially in real-word apps with large or complex dataset.
Array - an ordered collection of data , indexing starts from 0
Object

JS is dynamically typed no need to declare datatype, types are determined at run time.

console.log(users[5]) // undefinde

to find total element of array - .length property

array function - 
    pop() - removes and return last elements
    // updating array
    users[1] = "Atul";
    push() - add element end of array and return new updated length

# Day-19
for..of  loop
for(var user of users){
    console.log(user)
}    

# Day-20
object property name can not have - or space
for..of loop doesn't work on objects TypeError: admission is not iterable

so we use for in loop
for(var info in admission){
    console.log(info);
    console.log(admission[info]);
}
so here info will give all keys and with the help of keys we can access  values.

when we get key from variable to access that we use [] not . operator

if property doesnot exist it will give undefined

# Day-21


object destructuring:

for(var student of students){
    const {name, class:cls, roll, subject} = student;
    console.log(name, cls, roll, subject);
}

for(var {name, class:cls, roll, subject} of students){
    console.log(name, cls, roll, subject);
}


# Day-22
operator -mathmetical symbols that performs some action between operands.
operands - 

+, -, * , /, %, >, <

comparision operator:
> , <, ==, >=, <=, !=

if() {

}else{

}

1 space takes 1byte memory 

new Date() - for date it gives current date and time in IST (India Standard Time)

const date = new Date();
console.log(date);
const hour = date.getHours();
console.log(hour);
const day = date.getDay();
console.log(day); // sunday: 0   saturday: 6

# Day-23
# Day-24
# Day-25
# Day-26
location.href
parentElement
donot use keyword as function or variable name
close()


Here you go 👍
Clean, **interview-ready notes** on **JavaScript `location` object** in **Markdown (.md) format**.

---

````md
# JavaScript `location` Object – Complete Notes

## 1. What is `location` in JavaScript?
`location` is a **built-in browser object** that provides information about the **current URL** and allows **navigation / redirection**.

It is part of:
- `window.location`
- `document.location` (alias)

```js
console.log(window.location === document.location); // true
````

---

## 2. Example URL (Reference)

```
https://www.example.com:8080/path/page.html?name=shiv&id=10#top
```

---

## 3. `location` Properties

### 3.1 `location.href`

➡️ Returns the **entire URL**

```js
location.href;
```

Output:

```
https://www.example.com:8080/path/page.html?name=shiv&id=10#top
```

---

### 3.2 `location.protocol`

➡️ Returns the protocol

```js
location.protocol;
```

Output:

```
https:
```

---

### 3.3 `location.host`

➡️ Hostname + Port

```js
location.host;
```

Output:

```
www.example.com:8080
```

---

### 3.4 `location.hostname`

➡️ Hostname only

```js
location.hostname;
```

Output:

```
www.example.com
```

---

### 3.5 `location.port`

➡️ Port number

```js
location.port;
```

Output:

```
8080
```

---

### 3.6 `location.pathname`

➡️ Path of URL

```js
location.pathname;
```

Output:

```
/path/page.html
```

---

### 3.7 `location.search`

➡️ Query string

```js
location.search;
```

Output:

```
?name=shiv&id=10
```

---

### 3.8 `location.hash`

➡️ Hash / Anchor

```js
location.hash;
```

Output:

```
#top
```

---

### 3.9 `location.origin`

➡️ Protocol + Host

```js
location.origin;
```

Output:

```
https://www.example.com:8080
```

---

## 4. Location Methods

### 4.1 `location.assign(url)`

➡️ Redirects to a new URL
➡️ **Back button works**

```js
location.assign("https://google.com");
```

---

### 4.2 `location.replace(url)`

➡️ Redirects to a new URL
➡️ **Back button does NOT work**

```js
location.replace("https://google.com");
```

---

### 4.3 `location.reload()`

➡️ Reloads the current page

```js
location.reload();
```

Force reload (ignore cache):

```js
location.reload(true);
```

---

## 5. Read-only vs Writable

### ❌ Read-only properties

```js
location.protocol = "http"; // Not allowed
```

### ✅ Allowed (navigation)

```js
location.href = "https://example.com";
```

---

## 6. `assign()` vs `replace()` (Interview Favorite)

| Feature       | assign() | replace()      |
| ------------- | -------- | -------------- |
| Navigation    | Yes      | Yes            |
| Back button   | ✅ Works  | ❌ Doesn't work |
| History entry | Added    | Replaced       |

---

## 7. Real-World Use Cases

### 7.1 Force HTTPS

```js
if (location.protocol !== "https:") {
  location.replace("https://" + location.host + location.pathname);
}
```

---

### 7.2 Get Query Params

```js
const params = new URLSearchParams(location.search);
console.log(params.get("name")); // shiv
```

---

### 7.3 Logout Redirect

```js
localStorage.clear();
location.replace("/login");
```

---

## 8. `window.location` vs `document.location`

* Both point to the **same object**
* `window.location` is preferred

---

## 9. Common Interview Questions

### Q1. Is `location` part of JavaScript or Browser?

➡️ Browser (Web API), not core JS

### Q2. Can we change URL without reload?

➡️ ❌ Not with `location`
➡️ ✅ Use `history.pushState()`

### Q3. Is `location` mutable?

➡️ Properties: ❌ No
➡️ Navigation: ✅ Yes

---

## 10. One-Line Summary

> `location` is used to **read URL details** and **navigate between pages** in the browser.

---




# Day-52 : School management app (Setup)
- Tailwind CSS cdn
- Remix icon
- Animate.css

Day-21 form adder student
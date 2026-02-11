# Day-01

## What is programming language?
 - The language which have capability to take decision, is called programming language.

## How to execute a programming language?
- To convert High Level Language to Machine Code we need Translator.
- Types of translator :
    -   Interpretor
    -   Compiler

## What is JavaScript?
JavaScript (JS) is a programming language that makes web pages interactive. It can:
- Change website content dynamically.
- Respond to user actions like clicks and keyboard input.
- Communicate with servers to fetch or send data.
---
- JavaScript is a high level programming language.
- Javascript is client side programming language.
- VB script is also a client side scripting language before Javascript.
- We  need browser to execute client side language.

> In simple words, HTML is the structure, CSS is the design, and JavaScript is the brain of a webpage


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


# Day-27

CDN

1. Background color
    bg-color_name-varient (no varient in black and white)

2. Text color
    text-color_name-varient (no varient in black and white)  

3. width
    w-px    
    w-full => 100%
    w-6/12 => 50%
    w-fit => fit-content
    w-[120px] => custom
        px-1px
        1- 4px
        2- 8px
        3- 12px
        .
        .
        .
        96- 384px

4. height
    h-

        h-full => 100% -> depends containers height / or content or position absolute and relative
        h-screen => 100vh
        px => 1px
        1 => 4px
        2 => 8px
        3 => 12px
        .
        .
        .
        96 => 384px

5. text-align
    text-left
    text-right
    text-center
    text-justify

6. font-weight
    font-medium
    font-semibold
    font-bold


# Day-28

1. background-color: bg-
2. text-color: text-
3. font-size: text-
    text-xs (12px)
    text-sm (14px)
    text-base (18px)
    text-lg
    text-xl
    text- 2xl
    text- 3xl
    text- 4xl .... 9xl
    text-[120px]
4. border: border

    border: 1px
    border - all side border
    border-2 (border width)
    border-green-600 (border color)
    border-t border-t-2
    border-b border-b-2
    border-r border-r-2
    border-l border-l-2
5. display
6. grid
7. padding
    p-px (1px)
    p-1 (4px)
    p-2 (8px)
    p-3 (12px) .... p-96
    p-[23px]

    pt - padding top
    pb - padding bottom
    pr - padding right
    pl - padding left

    px - horizontal padding
    py - vertical padding
8. margin
    m-px (1px)
    m-1 (4px)
    m-2 (8px)
    m-3 (12px) .... p-96
    m-[23px]

    mt - margin top
    mb - margin bottom
    mr - margin right
    ml - margin left

    mx - horizontal margin
    my - vertical margin

9. border-radius
    rounded
    rounded-xs
    rounded-sm
    rounded-md
    rounded-lg
    rounded-xl
    rounded-2xl
    rounded-3xl
    rounded-4xl
    rounded-full

10. shadow
    shadow
    shadow-lg
    shadow-xl
11. hover effect
    hover:classname

12. flex
        flex
        justify-center
        items-center

13. grid
    grid
    grid-cols-4(max 12 cols)
    gap-16
            

# Day-29
html - bad markup
x-html - good markup
    <img />
    <br />
    do not set global style layer

to fix navbar use sticky
list-style-type : list-none/disk/decimal    


learn sanity with react+node

lg: for desktop
flex-row, flex-col, justify-around, items-center
sticky, top-0, left-0
z-index: z-10, z-0, z-20
underline decoration- underline-offset- no-underline
whitespace-nowrap
grid grid-cols-5 gap-8 mx-auto
scale-110
duration-300 transition
object-cover
aspect-[4/3]

# Day-30
bg-[url(./images/20.jpg)]
apperance-none to hide checkbox
underline underline-offset-4 decoration-gray-100
uppercase
accent-yellow-500 focus:ring-4 focus:outline-none  
focus:ring-yellow-100 disabled:opacity-50
focus:outline-[#564DE6]
tracking-tight => letter-spacing

const terms = form.terms.checked;
checked for read checkbox value

form-validation: 
    onblur: input se bahar click karne par
    placeholder-red-500

# Day-31
    <small></small> - for small tag
    hidden for display hidden
    nextElementSibling
    oninput - just start typing

    form live link : https://vex.visurel.com/register

# Day-32
!
&&
||

# Day-33
local storage: stored data domin wise
it stays untill you do not delete
password store nahi karte hai
localstorage.setItem("key", "value") -> store (number, string, boolean) key can not be duplicate otherwise it will replace
localstorage.getItem("key") -> read
localstorage.removeItem("key") -> delete / returns nothing
localstorage.clear() -> delete all data
localstorage.length -> length
localstorage.key(0) -> to get name of particular index
const keys = Object.keys(localStorage); // return array of keys of localstorages

store text data only


alert() - takes only one argument
form.reset() - to clear form
sweetalert



```md
# 📦 JavaScript LocalStorage – Beginner to Advanced (Interview Ready)

---

## 🔹 What is LocalStorage?

- `localStorage` is a **Web Storage API**
- Used to store data **in the browser**
- Data is stored **domain-wise**
- Data **persists even after page reload or browser restart**
- Data remains **until explicitly deleted**

👉 Example:
```

example.com  → its own localStorage
google.com   → separate localStorage

````

---

## 🔹 Important Security Note ❌

- ❌ **Never store passwords, tokens, or sensitive data**
- ❌ localStorage is accessible via JavaScript
- ❌ vulnerable to XSS attacks

✅ Use:
- Cookies (httpOnly)
- Secure backend sessions

---

## 🔹 Data Type Rules

- LocalStorage stores **TEXT ONLY**
- Everything is stored as **string**

| Original Value | Stored As |
|---------------|----------|
| `"Hello"` | `"Hello"` |
| `123` | `"123"` |
| `true` | `"true"` |
| `{}` | `"[object Object]"` ❌ |

👉 Use `JSON.stringify()` for objects & arrays

---

## 🔹 Storing Data

### `localStorage.setItem(key, value)`

```js
localStorage.setItem("name", "Shiv");
localStorage.setItem("age", 25);
localStorage.setItem("isAdmin", true);
````

📌 Rules:

* `key` must be **unique**
* Duplicate key → **value gets replaced**
* Returns **nothing**

---

## 🔹 Reading Data

### `localStorage.getItem(key)`

```js
const name = localStorage.getItem("name");
console.log(name); // "Shiv"
```

📌 If key does not exist:

```js
localStorage.getItem("abc"); // null
```

---

## 🔹 Deleting Data

### Delete a single key

```js
localStorage.removeItem("name");
```

* Removes the key-value pair
* Returns **nothing**

---

### Delete all data

```js
localStorage.clear();
```

* Clears **entire localStorage** for that domain

---

## 🔹 LocalStorage Length

```js
localStorage.length;
```

* Returns total number of stored keys

---

## 🔹 Access Key by Index

```js
localStorage.key(0);
```

* Returns key name at given index
* Order is browser-dependent (not guaranteed)

---

## 🔹 Get All Keys (Important)

```js
const keys = Object.keys(localStorage);
console.log(keys);
```

* Returns array of all localStorage keys
* Very useful for loops & dashboards

---

## 🔹 Loop Through LocalStorage

```js
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(key, value);
}
```

---

## 🔹 Storing Objects & Arrays (Advanced)

### ❌ Wrong

```js
localStorage.setItem("user", { name: "Shiv" });
```

### ✅ Correct

```js
const user = { name: "Shiv", role: "Admin" };

localStorage.setItem("user", JSON.stringify(user));
```

### Reading Object

```js
const userData = JSON.parse(localStorage.getItem("user"));
console.log(userData.name);
```

---

## 🔹 Difference: LocalStorage vs SessionStorage

| Feature           | localStorage | sessionStorage   |
| ----------------- | ------------ | ---------------- |
| Lifetime          | Permanent    | Until tab closes |
| Scope             | Domain       | Tab only         |
| Storage Limit     | ~5–10MB      | ~5MB             |
| Accessible via JS | Yes          | Yes              |

---

## 🔹 alert() Function

```js
alert("Hello");
```

📌 Rules:

* Takes **only ONE argument**
* Blocks JS execution until user clicks OK

---

## 🔹 form.reset()

```js
form.reset();
```

* Clears all form fields
* Resets to initial values
* Commonly used after submit

---

## 🔹 Common Mistakes (Interview Favorite)

❌ Storing passwords
❌ Forgetting JSON.stringify
❌ Assuming data auto-deletes
❌ Expecting numbers instead of strings
❌ Using localStorage inside server-side code

---

## 🔹 When to Use LocalStorage?

✅ Theme preference (dark/light)
✅ Language selection
✅ User UI settings
✅ Cart data (non-sensitive)

❌ Authentication tokens
❌ Passwords
❌ Personal data

---

## 🔹 Interview One-Liners 🔥

* LocalStorage stores **key-value pairs as strings**
* Data persists **until manually cleared**
* Stored **domain-wise**
* Maximum size is **around 5–10MB**
* Objects require **JSON.stringify / JSON.parse**

---

## 🔹 Mini Interview Question

**Q:** What happens if key already exists?
**A:** Value gets replaced.

**Q:** What does `getItem()` return if key not found?
**A:** `null`

**Q:** Is localStorage synchronous or async?
**A:** Synchronous

---

## ✅ Conclusion

LocalStorage is simple, powerful, and widely used for **client-side persistence**, but should be used carefully with **security in mind**.


const isMobile = window.innerWidth < 768;
sweetalert
Date.now()
window.onload = () => {
    fetchdata()
}
location.href = location.href

# 36
JSON.parse()
JSON.stringify()
moment.js
# 37
# 38

    sessionStorage.setItem(key, value)
    sessionStorage.getItem(key)
    sessionStorage.removeItem(key)
    sessionStorage.clear()

usecase of session and local storage
showadd() example
const test = () => {
    const student = JSON.stringify({
        name: "Ajeet",
        roll: 12,
        subject: "math"
    })

    console.log(student);
    console.log(student.name); // undefined
    console.log(student.roll);
    console.log(student.subject);
}

# Day-39
JSON - JavaScript Object Notation is a type of datatype

Applications in browser to store data
    1. localStorage
    2. sessionStorage
    3. cookies
    4. indexedDB
    5. webSQL // depricated

undraw fi=or illustrator    

in form space-x-6 or space-y-6

# Day-40
onfocusout
onblur
nextElementSibling
throw new Error()
const user = {
        fullname,
        email,
        password
}

# Day-41
form validation rules
user-select: none ==> select-none

in form if multiple btns keep type button expect one btn
location.replace() : it removes previous history
location.href : it keeps previous history

ring, focus with-in tailwind

<button 
                        class="relative bg-indigo-500 py-2.5 px-6 rounded-md text-white font-medium text-lg hover:cursor-pointer hover:bg-indigo-600 mt-6 w-full"
                        onchange="uploadImage()"
                    >
                        <i class="ri-upload-line"></i>
                        Upload Image
                        <input type="file" 
                        accept="image/*"
                        name="imageUpload" id="imageUpload" class="h-full w-full absolute top-0 left-0 rounded-md opacity-0" />
                    </button>

accept="image/*"
onchange for input:file       
to get information about selected files we use file array             
const file = chooseImageEle.files[0]
after that we have to create url using URL.createObjectURL(file)
it will give the url

to crop the image we will use cropper.js library
<link rel="stylesheet" href="https://unpkg.com/cropperjs@1.5.13/dist/cropper.min.css" />
    <script src="https://unpkg.com/cropperjs@1.5.13/dist/cropper.min.js"></script>

how to get crop area : from canvas
        const canvas = isCropper.getCroppedCanvas()
    console.log(canvas);

    now generate url of this frame we use toDataURL('filetype/extension') it gives incoded string
    canvas.toDataURL('image/png')

# Day-43
css wave /css clip generated
blob url is temporary    

# Day-44
Filereader API - file code used to set file for permanent use - base64 string
https://www.javascripttutorial.net/web-apis/javascript-filereader/
do not use for large files

# Day-45
setTimeout()
setInterval()
clearInterval()

# Day-46
group and group-hover in tailwaind
active:scale-95 select-none

if you want to control width dynamically do not use tailwind for that

sideBarEle.offsetWidth


always use nav to create navbar
# Day-52 : School management app (Setup)
- Tailwind CSS cdn
- Remix icon
- Animate.css

Day-21 form adder student
day-24 kids app
day-28 practice tailwind
let topic = document.getElementById("topic")
topic.innerText = "Data Type"

let description = document.getElementById("description-0")
description.innerText = "A data type (or simply type) is a collection or grouping of data values, usually specified by a set of possible values, a set of allowed operations on these values, and/or a representation of these values as machine types. A data type in a program constrains the possible values that an expression, such as a variable or a function call, might take. On literal data, it tells the compiler or interpreter how the programmer intends to use the data. Most programming languages support basic data types of integer numbers (of varying sizes), floating-point numbers (which approximate real numbers), characters and Booleans. JavaScript has different types of data that can be assigned to variables. The main data types are:"


let dataType0 = document.getElementById("first-data-type")
dataType0.innerText = "Primitive Data Type"


// Table 
let dataType = document.querySelector("#Datatype")
dataType.textContent = "Primitive Data Types"
let Description = document.querySelector("#Description")
Description.textContent = "Description"
let Example = document.querySelector("#Example")
Example.textContent = "Example"

// Table body 

let dataType1 = document.querySelector("#data-type-1-1")
dataType1.textContent = "Number"
let description1 = document.querySelector("#description-1-1")
description1.textContent = "	Represents integers and floating-point numbers."
let example1 = document.querySelector("#example-1-1")
example1.textContent = "let num = 42;"

let dataType2 = document.querySelector("#data-type-1-2")
dataType2.textContent = "String"
let description2 = document.querySelector("#description-1-2")
description2.textContent = "Sequence of characters used to represent text."
let example2 = document.querySelector("#example-1-2")
example2.textContent = "let name = \"Aashis\";"


let dataType3 = document.querySelector("#data-type-1-3")
dataType3.textContent = "Boolean"
let description3 = document.querySelector("#description-1-3")
description3.textContent = "Logical data type with two values: true or false."
let example3 = document.querySelector("#example-1-3")
example3.textContent = "let isTrue = true;"

let dataType4 = document.querySelector("#data-type-1-4")
dataType4.textContent = "Undefined"
let description4 = document.querySelector("#description-1-4")
description4.textContent = "A variable that has been declared but not assigned a value."
let example4 = document.querySelector("#example-1-4")
example4.textContent = "let x; // undefined"

let dataType5 = document.querySelector("#data-type-1-5")
dataType5.textContent = "  Null"
let description5 = document.querySelector("#description-1-5")
description5.textContent = "Represents a deliberate absence of value."
let example5 = document.querySelector("#example-1-5")
example5.textContent = "let empty = null;"

let dataType6 = document.querySelector("#data-type-1-6")
dataType6.textContent = "Symbol"
let description6 = document.querySelector("#description-1-6")
description6.textContent = "Unique and immutable value, often used as object keys."
let example6 = document.querySelector("#example-1-6")
example6.textContent = "let sym = Symbol('id');"

let dataType7 = document.querySelector("#data-type-1-7")
dataType7.textContent = "BigInt"
let description7 = document.querySelector("#description-1-7")
description7.textContent = "DescriptUsed for integers beyond the safe limit of Number.ion"
let example7 = document.querySelector("#example-1-7")
example7.textContent = "let big = 12345678901234567890n;"

// Non primitive


let dataType01 = document.getElementById("Second-data-type")
dataType01.innerText = "Non-Primitive Data Type"


// Table 
let dataType001 = document.querySelector("#Datatype-1")
dataType001.textContent = "Non-Primitive Data Types"
let Description2 = document.querySelector("#Description-1")
Description2.textContent = "Description"
let Example2 = document.querySelector("#Example-1")
Example2.textContent = "Example"
     
// Table body 

let dataType11 = document.querySelector("#data-type-2-1")
dataType11.textContent = "Object"
let description11 = document.querySelector("#description-2-1")
description11.textContent = "Collection of key-value pairs (includes arrays and functions)."
let example11 = document.querySelector("#example-2-1")
example11.textContent = "let obj = { name: \"Aashis\" };"


let dataType21 = document.querySelector("#data-type-2-2")
dataType21.textContent = "Array"
let description21 = document.querySelector("#description-2-2")
description21.textContent = "A list-like object used to store multiple values."
let example21 = document.querySelector("#example-2-2")
example21.textContent = "let arr = [1, 2, 3];"


let dataType31 = document.querySelector("#data-type-2-3")
dataType31.textContent = "Function"
let description31 = document.querySelector("#description-2-3")
description31.textContent = "A reusable block of code that performs a specific task."
let example31 = document.querySelector("#example-2-3")
example31.textContent = "function greet() { return \"Hi\"; }"

let back = document.getElementById("back-3")
back.innerText = ("Go Back")
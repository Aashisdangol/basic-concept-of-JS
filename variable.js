let headElement = document.getElementById("head")
headElement.innerText = "Variables"

let bodySection = document.querySelector(".body-section")
bodySection.textContent = "A variable is a named memory location in which you can store a value like a number. There are four types of variables: number, string, boolean, and color. You must declare a variable type when you create one, and you can't change it later. In JavaScript, you can declare variables using the keywords var, let, and const."

let listSection1 = document.querySelector(".list-1")
listSection1.textContent = "var: Declares a variable that can be updated but is globally scoped or function-scoped (older method)."
let listSection2 = document.querySelector(".list-2")
listSection2.textContent = "let: Declares a block-scoped variable that can be updated."
let listSection3 = document.querySelector(".list-3")
listSection3.textContent = "const: Declares a block-scoped variable that cannot be updated or re-assigned."

let section = document.querySelector(".body-section-1")
section.textContent = "var name = 'Aashis';  let age = 22;        const city = 'Kathmandu';"
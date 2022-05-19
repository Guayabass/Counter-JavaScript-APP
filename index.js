//document.getElementById("counter").innerText = 5 //sets the number to 5

let count = 0

function increment(){
    count += 1
    document.getElementById("counter").innerText = count //sets the number to 5
}

function save(){
    let entries = document.getElementById("entries")
    let savedValue = count
    let dash = " - "

    entries.innerText += " " + savedValue + dash
}

function deleteNumber(){
    count = 0
    document.getElementById("counter").innerText = count
}

/*let welcomeEl = document.getElementById("welcome-el")

let name = "Per Harald Borgen"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText += "👋"
el += es como para hacer count = count + 1
*/
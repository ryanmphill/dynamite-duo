// Import the function references that generate the HTML lists
import { HeroList } from "./heroes.js"
import { VillainList } from "./villains.js"

// Capture the return values of the HTML list generators
const heroListHTML = HeroList()
const villainListHTML = VillainList()

// Build up a single string containing both chunks of HTML
const theWholeEnchilada = `
    <h1>Heroes</h1>
    ${heroListHTML}

    <h1>Villains</h1>
    ${villainListHTML}
`


// get a reference to the <main> element
const theExistingMainElement = document.querySelector("#container")

/*
Place this line of code at the very end of your main.js module. It takes 
the whole HTML string that you built and assigns it to the .innerHTML 
property of the <main> element that you got a reference to earlier in 
the code.
*/
theExistingMainElement.innerHTML = theWholeEnchilada
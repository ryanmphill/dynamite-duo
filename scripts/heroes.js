// Import getter function
import { getHeroes } from "./database.js"
// Invoke getter function and store it in a variable
const heroes = getHeroes()

// Write function to turn objects into html
export const HeroList = () => {
    let heroHTML = "<ul>"

    for (const hero of heroes) {
        heroHTML += `<li>${hero.name}</li>`
    }

    heroHTML += "</ul>"

    return heroHTML
}

// Import villains getter function
import { getVillains } from "./database.js"
// invoke getter function and assign it to a variable
const villains = getVillains()

// Write function to turn object to string
export const VillainList = () => {
    let villainHTML = "<ul>"

    for (const villain of villains) {
        villainHTML += `<li>${villain.name}</li>`
    }

    villainHTML += "</ul>"

    return villainHTML
}
// Guess what? I didn't skid this!!!!!
//

import { moduleDefinition } from "../moduleapi"

function forceselect() {
     let allElements: NodeListOf<HTMLElement> = document.body.querySelectorAll("*");
    console.log(allElements)
    allElements.forEach(function(element: HTMLElement) {
        element.style.setProperty('user-select', 'auto', 'important')
    })      

 }

const plugin: moduleDefinition = {
    displayName: "ForceSelect+",
    id: "betterforce",
    section: "exploit",
    onactive: forceselect,
    ondisable: forceselect,
    always: true
}

export default plugin;
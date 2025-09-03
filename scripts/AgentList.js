import { getBusinesses } from "./database.js"

export const AgentList = () => {
    const businessArray = getBusinesses()
    const agentHTMLRepresentations = businessArray.map(
        (businessObject) => {
            return `<h3 class="business__name">${businessObject.purchasingAgent.nameFirst} ${businessObject.purchasingAgent.nameLast}</h3>
                    <div class="business__address">
                        <p>${businessObject.phoneWork}</p>
                    <hr>
                    </div>`
        }
    )

    const finalHTML = agentHTMLRepresentations.join(`\n`)

    return finalHTML
}
import { getBusinesses } from "./database.js"


export const businessList = () => {
    const businessArray = getBusinesses()
    let businessListHTML = ""

    businessArray.forEach(
        (businessObject) => {
            businessListHTML += `
                    <h3 class="business__name">${businessObject.companyName}</h3>
                    <div class="business__address">
                        <p>${businessObject.addressFullStreet}</p>
                        <p>${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</p>
                    <hr>
                    </div>`
        }
    )
    return businessListHTML
}
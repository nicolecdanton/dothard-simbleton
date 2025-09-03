import { getBusinesses } from "./database.js";




const isNY = (business) => {
        if (business.addressStateCode === "NY") {
            return true 
        }
        else {
            return false
        }
}

export const NewYorkBusinesses = () => {
    const businessArray = getBusinesses()
    const nyFiltered = businessArray.filter(isNY)
    let newYorkHTML = ""

    nyFiltered.forEach(
        (businessObject) => {
            newYorkHTML += `
                    <h3 class="business__name">${businessObject.companyName}</h3>
                    <div class="business__address">
                        <p>${businessObject.addressFullStreet}</p>
                        <p>${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</p>
                    <hr>
                    </div>`
        }
    )
    return newYorkHTML
    
}
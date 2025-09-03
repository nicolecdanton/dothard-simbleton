import { getBusinesses } from "./database.js";




const isManufacturing = (business) => {
        if (business.companyIndustry === "Manufacturing") {
            return true 
        }
        else {
            return false
        }
}

export const ManufacturingBusinesses = () => {
    const businessArray = getBusinesses()
    const manufacturingFiltered = businessArray.filter(isManufacturing)
    let manufacturingHTML = ""

    manufacturingFiltered.forEach(
        (businessObject) => {
            manufacturingHTML += `
                    <h3 class="business__name">${businessObject.companyName}</h3>
                    <div class="business__address">
                        <p>${businessObject.addressFullStreet}</p>
                        <p>${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</p>
                    <hr>
                    </div>`
        }
    )
    return manufacturingHTML
    
}
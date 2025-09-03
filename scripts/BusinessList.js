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


document
    .querySelector("#content")
    .addEventListener(
            "keypress",
            (keyPressEvent) => {
                const companySearchResultArticle = document.querySelector(".foundBusinesses")
                const businessArray = getBusinesses()

                if (keyPressEvent.charCode === 13) {
                   const searchTerm = keyPressEvent.target.value
                   const foundBusiness = businessArray.find(
                    (business) => business.companyName.toLowerCase().includes(searchTerm.toLowerCase()))
                        // includes is case senstitive!! 
                        // this is what it looks like without normalizing the case: 
                        // const foundBusiness = businessArray.find(
                            // (business) => business.companyName.includes(searchTerm)


                        if (foundBusiness) {
                            companySearchResultArticle.innerHTML = `
                                <section class="business">
                                    <h2 class="business__name">${foundBusiness.companyName}</h2>
                                    <div class="business__address">
                                        <p>${foundBusiness.addressFullStreet}</p>
                                        <p>${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}</p>
                                    </div>
                                    <p><strong>Phone:</strong> ${foundBusiness.phoneWork}</p>
                                </section>`
                        } 
                        else {
                            // No match found
                            companySearchResultArticle.innerHTML = `<p>No business found.</p>`
                        }
                    }
                }
            )
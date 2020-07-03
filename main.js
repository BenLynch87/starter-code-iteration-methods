// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

//kata1 Filter the users array to show only the users with an isActive property of true.
const kata1 = users.filter(user => user.isActive)
printKata(1, kata1)
//kata2 Map over the users array to show only the email addresses of the users.
const kata2 = users.map(user => user.email)
printKata(2, kata2)
//kata3 Check whether at least one user in the users array has a company property of "OVATION".
const kata3 = users.some(user => user.company === 'OVATION')
printKata(3, kata3)
//kata4 Find the first user in the array over the age of 38.
const kata4 = users.find(user => user.age > 38)
printKata(4, kata4)
//kata5 Find the first user in the array over the age of 38 who is active.
const kata5 = users.filter(user => user.isActive).find(user => user.age > 38)
printKata(5, kata5)
//kata6 Show the balance of every user in the array from the "ZENCO" company.
const kata6 = users.filter(user => user.company === 'ZENCO').map(user => user.balance)
printKata(6, kata6)
//kata7 Show the age of every user with the "fugiat" tag.
const kata7 = users.filter(user => user.tags.includes('fugiat')).map(user => user.age)
printKata(7, kata7)
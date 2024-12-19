const accountId = 144553
let accountEmail = "saketh@gmail.com"
var accountPassword = "1357"
accountCity = "hyderabad"
let accountState;

// accountId = 15647845 // not allowed

accountEmail = "dsr@gmail.com"
accountPassword = "2468"
accountCity = "Banglore"

console.log(accountId)
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
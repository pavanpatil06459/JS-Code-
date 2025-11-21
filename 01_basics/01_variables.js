const accountId = 144553
let accountEmail = "pavan06459@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState

//accountId = 2 // not allowed 
accountEmail = "hchc.com"
accountPassword = "2133232"
accountCity = "Mumbai"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and fuctional scope 
*/

console.table([accountEmail, accountPassword, accountCity, accountState])

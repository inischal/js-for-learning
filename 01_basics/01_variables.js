const accountId= 696969;
let accountEmail="123@gmail.com";
var accountPassword="343434";
accountCity="Bhaktapur";


// accountId=2; //not allowed
accountEmail="124@gmail.com";
accountPassword="return";
accountCity="follow";
let accountState;

/*
prefer not to use var. because of block scope and functional scope.
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-777",
    email: "bob.jones@example.com"
};
// print values of first name, last name and email
console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.email);

//Write a console.log statement that prints out Mary's phone number
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};
var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};
var contacts = [bob, mary];
console.log (contacts[1].phoneNumber)
//output:(650) 888-8888

//print out information about any person in our contacts
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};
var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};
var contacts = [bob, mary];
// printPerson added here
var printPerson = function (person) {
    console.log (person.firstName + " " + person.lastName)
}
printPerson(contacts[0]);
printPerson(contacts[1]);
//output:Bob Jones Mary Johnson


//build feature that lists all of the contacts
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

var list = function () {
    for (i =0; i < contacts.length; i++){
printPerson(contacts[i]);
}
}
list()
//output:Bob Jones Mary Johnson

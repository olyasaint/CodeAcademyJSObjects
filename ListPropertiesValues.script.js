

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};
// write a for-in loop to print the value of nyc's values
for (var x in nyc) {
    console.log(nyc[x]);
}
//output: New York City
Bill de Blasio
8000000
5


//write a for-in loop to print the value of nyc's properties
for (var property in nyc) {
    console.log (property);
}
//output: fullName
mayor
population
boroughs

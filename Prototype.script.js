function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

// add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console
Cat.prototype.meow = function () {
    console.log ("Meow!");
};

// add code here to make the cats meow!
cheshire.meow ();
gary.meow ();


// create your Animal class here
function Animal (name, numLegs) {
this.name=name;
this.numLegs=numLegs;
}
// create the sayName method for Animal
Animal.prototype.sayName = function () {
    console.log ("Hi my name is " + this.name);
};
// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();
//output: Hi my name is Captain Cook

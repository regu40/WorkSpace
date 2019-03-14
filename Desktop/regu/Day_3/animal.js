function Animal(name,energy)
{
    let animal = {}
    animal.name=name;
    animal.energy = energy
    animal.sleep=function(length){
        this.energy += length;
    }
    return animal;
}

//--------------------------------------------------------------------------------
const animalMethods = {
    eat(amount)
    {
        this.energy += amount
    },
    play(length)
    {
        this.energy += amount
    
    }
}

function Animal(name,energy)
{
    let animal = {}
    animal.name=name;
    animal.energy = energy
    animal.sleep= animalMethods.eat
    return animal;
}

//--------------------------------------------------------------------------------


function Animal(name,energy)
{
    let animal = Object.create(animalMethods) //prototype instantials
    animal.name=name;
    animal.energy = energy
    
    return animal;
}

//--------------------------------------------------------------------------------


function Animal(name,energy)
{
    let animal = Object.create(Animal.prototype) //prototype instantials
    animal.name=name;
    animal.energy = energy
    
    return animal;
}

Animal.prototype.eat = function(amount){
    this.energy += length
}

Animal.prototype.sleep = function(amount){
    this.energy += length
}

Animal.prototype.play = function(amount){
    this.energy -= length
}

const leo = Animal('Leo',7)
const snoop = Animal('snoop',7)

//--------------------------------------------------------------------------------


function Animal(name,energy)
{
    //let animal = Object.create(Animal.prototype) 
    this.name=name;
    this.energy = energy
    
   // return animal;
}

Animal.prototype.eat = function(amount){
    this.energy += length
}

Animal.prototype.sleep = function(amount){
    this.energy += length
}

Animal.prototype.play = function(amount){
    this.energy -= length
}

const leo =new Animal('Leo',7)
const snoop =new Animal('snoop',7)

//--------------------------------------------------------------------------------

function foo()
{
    console.log(this.bar);
}
var bar="bar1";
var obj ={ bar : "bar145"};

foo();
foo.call(obj);
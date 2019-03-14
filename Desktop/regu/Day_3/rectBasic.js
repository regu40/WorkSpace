
class Animal
{
    constructor(name,energy){
        this.name=name;
        this.energy = energy
    }
   
    
   // return animal;


eat(amount){
    console.log('${this.name} is eating.')
    this.energy += length
}

sleep(amount){
    console.log('${this.name} is sleeping.')
    this.energy += length
}

play(amount){
    console.log('${this.name} is playing.')
    this.energy -= length
}
}
const leo =new Animal('Leo',7)
const snoop =new Animal('snoop',7)

//--------------------------------------------------------------------------------

let toyBox = { item1 :'car', item2 : 'ball', item3 : 'frr' }

let{item1,item2}= toyBox
let {item3 : dd} = toyBox //dd=frr

//--------------------------------------------------------------------------------

let widgets =['widgets1','widgets2','widgets3','widgets4','widgets5']
let [a,b,c,...d] = widgets //rest operator
console.log(a);
console.log(d);

//--------------------------------------------------------------------------------


updatequery = function(query){
    this.setState(function())
}

updatequery = =>(query){ //arrow function
    this.setState(=>())
}


//--------------------------------------------------------------------------------



class Animal {
  constructor(name){
    this.name=name;
  }

   move=()=>{
      console.log('Move '+this.name);
    }
}

class Fish extends Animal{

}

class MicroFish extends Fish{

}

const frog=new Animal('Crazy');
const goldFish=new MicroFish('Nemo');
console.log(frog.move());
console.log(goldFish.move());
console.log(frog);



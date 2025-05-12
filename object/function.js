const car={

    name:"tata",
    seat:5,
    price:90000,
}
// Object.freeze(car);
Object.defineProperties(car,{
    name:{
        writable:false,
        configurable:false,
    }
})
car.name="kill",
car.seat=6,

console.log(car.name,car.price,car.seat);
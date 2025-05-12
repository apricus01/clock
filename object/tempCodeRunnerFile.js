Object.freeze(car);
Object.defineProperties(car,{
    name:{
        writable:false,
        configurable:false,
    }
})
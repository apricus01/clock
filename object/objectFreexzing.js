const student={
    name:"Himanshu Kumar",
    "roll_No":1060,
    course:"B.Tech",


};
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//freezing entire objects 
// Object.freeze(student)
// student.name="Rohan";

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//freezing single objects
Object.defineProperties(student,{
    name:{
        writable:false,
        configurable:false,
    },

    roll_No: {
        writable:false,
        configurable:false,
    }
});
student.name="Rohan";
student.roll_No=7634;
console.log(student.roll_No,student.name,student.course);
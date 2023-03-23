var temp = "Hello"; //สามารถใส่ค่าให้ใหม่ได้
// console.log(temp);

let temp2 = 41; //สามารถใส่ค่าให้ใหม่ได้
temp2 = 50;
// console.log(temp2); //50

temp4 = "dog";
temp4 = "cat";
// console.log(temp4);

const temp3 = true; //ไม่สามารถใส่ค่าให้ใหม่ได้
// console.log(temp3);

const temp5 = [1, 2, 3, 4, 5]; //array
const temp6 = ["cat", "dog", "fish"];
// console.log("log array  = " + temp5);
temp5.push(6, 7, 8);
// console.log("push 6,7,8 to array = " + temp5);
// console.log(temp5.concat(temp6)); //concat รวมarray
// console.log(temp5);

temp5.forEach((item) => {
  //loop จนกว่าจะครบทุกตัว
  //   console.log(item);
});
const filterTemp = temp5.filter((item) => item >= 3); //ตัวกรอง
// console.log(filterTemp);

// const car1 = { color: "Red", Brand: "Honda", model: "Accord" };
// car1.color='blue'
// console.log(car1.color); // ตัวแปร object / สามารถเปลี่ยนค่าได้

//-------------------------------------function--------------------------
function myFunction() {
  //   console.log("hi");
}
myFunction(); //เรียกใช้้

const sayHello = (A, B) => {
  //function รับ
  //   console.log("Name is : ", A, "||", "Number is : ", B);
};
const Name = "Raming";
sayHello(Name, 100); //

//-------------------------------------function return -------------------------
let fristName = "Raming";
let lastName = "Chalermsook";

let mergeName = (fristName, lastName) => {
  // return fristName+ " " + lastName //1
  let fullName1 = fristName + " " + lastName; //2
  return fullName1;
};
let fullName = mergeName(fristName, lastName);
//console.log(fullName);

// ---------------------------------condition เงื่อนไข-------------------------------
let num1 = 40;
// if (num1 > 30) {
//   console.log("num1 is more 30");
// } else {
//   console.log("num1 is less 30");
// }

// switch (num1) {
//   case 10:
//     console.log("num1 is 10");
//     break;
//   case 20:
//     console.log("num1 is 20");
//     break;
//   case 30:
//     console.log("num1 is 30");
//     break;
//   case 40:
//     console.log("num1 is 40");
//     break;
//   default:console.log("NaN")
//     break;
// }


//-----------------------------Loop & Interation------------------
const myPet=["Dog","Cat","fish","Bird","Cow"]
for (let i= 0; i< myPet.length; i++) {
    const pet = myPet[i];
    //console.log(pet); 
}

const car1 = { color: "Red", Brand: "Honda", model: "Accord" }; //for in
for (const key in car1) {
    if (Object.hasOwnProperty.call(car1, key)) {
        const element = car1[key];
        //console.log(element);
    }
}
for (const item of myPet) {  //for of
        //console.log(item);  
}

let i=0
while(i<10){
   // console.log("Number is : ",i);
    i++
}



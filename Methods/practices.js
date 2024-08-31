const number=[10,20,30,40];
number.forEach((num,index)=>{
    num*=num;
    console.log(num,index);
});
console.log(number);
//-------------------------------------------------------------------------------------------------------------------------------
const numbe=[1,2,3,4];
numbe.forEach(function doubled(num,index){
     num*=num;
     console.log(num,index);
})
console.log(numbe)

   
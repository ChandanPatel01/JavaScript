const numbers = [1, 2, 3, 4, 5];

const evenCheck = numbers.filter((num)=>{
  
if(num % 2 === 0){
     return true;
}else{
     return false;
     }
});

console.log(evenCheck); 
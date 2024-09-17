var num=Number(prompt("Enter your Number:"));
 var f=1;
 for(let i=num;i>=1;i--){
    f=f*i;
 }
 document.write(`Fac is ${num}=${f}`);
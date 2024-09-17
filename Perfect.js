var num =Number(prompt("Enter Your Perfect Number: "))
var sum=0;
for(let i=1; i<=num/2;i++){
    if(num%i==0){
        sum=sum+i;
    }

    if(sum===num){
        console.log(`${num} is perfect Number`);
    }
    else{
        console.log(`${num} is not  perfect Number`);
    }
}

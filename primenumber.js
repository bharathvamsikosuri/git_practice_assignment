let num=11;
let ct=0;
for(let i=0;i<num;i++){

  if(num%i==0){
    ct++;
  }
}
  if(ct==1){
    console.log("prime");
  }
  else{
    console.log("Not prime");
  }
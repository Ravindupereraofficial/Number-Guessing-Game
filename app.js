function guess(){

  let randomnumber= (Math.floor((Math.random()*10+1)));
  console.log(randomnumber)

  let userinput=document.getElementById("catchnumber").value;
  console.log(userinput)

  if(randomnumber==userinput){
    document.write("")
  }


}
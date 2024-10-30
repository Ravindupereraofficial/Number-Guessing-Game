let randomnumber= (Math.floor((Math.random()*10+1)));
console.log(randomnumber)

function guess(){

  
  let userinput=document.getElementById("catchnumber").value;
  console.log(userinput)

  if(randomnumber==userinput){
    chancesleft.innerHTML = "You Won The Game";
    attempt.innerHTML = "your Guessing Number Is Correct";
  } else{

    if(randomnumber>userinput){
        coolorhot.innerHTML="your Number Is low"
   
    }else if (randomnumber>userinput){
        coolorhot.innerHTML="your Number Is Higher"
    }

        

    }



  }


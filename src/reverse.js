//Author : Teboho Romeo Lekhalo

function reverse(str){
    let reversed = "";
    
    for(let i of str){
      reversed = i + reversed;
    }
    return reversed;
  }

  console.log(reverse('Hello'));

  //Since we doing es6...
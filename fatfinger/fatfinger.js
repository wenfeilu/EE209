//Test
var input = [];
var output = [];
var temp = [];
function firstFunction(){
  input.push(1);
  temp.push(1);
  mapChar();
  setTimeout(function(){submitFunction();}, 1000);
  

  
}
function secondFunction(){
  input.push(2);
  temp.push(2);
  mapChar();
  setTimeout(function(){submitFunction();}, 1000);
}
function thirdFunction(){
  input.push(3);
  temp.push(3);
  mapChar();
  setTimeout(function(){submitFunction();}, 1000);
  
}
function forthFunction(){
  input.push(4);
  temp.push(4);
  mapChar();
  setTimeout(function(){submitFunction();}, 1000);
  
}
function mapChar() {
  if (JSON.stringify(temp)==JSON.stringify([1])) {  
    document.getElementById("point").innerHTML = "a"
    
  }
 else if (JSON.stringify(temp)==JSON.stringify([1,1])) {
    
    document.getElementById("point").innerHTML = "b"
    
  }
   else if (JSON.stringify(temp)==JSON.stringify([1,1,1])) {
    document.getElementById("point").innerHTML = "c"
    
  }
   else if (JSON.stringify(temp)==JSON.stringify([1,1,1,1])) {
    document.getElementById("point").innerHTML = "d"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([2])) {
    
    document.getElementById("point").innerHTML = "e"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([2,2])) {
   document.getElementById("point").innerHTML = "f"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([2, 2, 2])) {
   document.getElementById("point").innerHTML = "g"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([2,2,2,2])) {
   document.getElementById("point").innerHTML = "h"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([3])) {
    document.getElementById("point").innerHTML = "i"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([3,3])) {
   document.getElementById("point").innerHTML = "j"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([3,3,3])) {
    document.getElementById("point").innerHTML = "k"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([3,3,3,3])) {
    document.getElementById("point").innerHTML = "l"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([4])) {
   document.getElementById("point").innerHTML = "m"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([4, 4])) {
    document.getElementById("point").innerHTML = "n"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([4, 4, 4])) {
    document.getElementById("point").innerHTML = "o"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([4, 4, 4, 4])) {
    document.getElementById("point").innerHTML = "p"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([1, 2])) {
    document.getElementById("point").innerHTML = "q"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([2,1])) {
   document.getElementById("point").innerHTML = "r"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([2, 4])) {
    document.getElementById("point").innerHTML = "s"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([4, 2])) {
    document.getElementById("point").innerHTML = "t"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([3, 4])) {
    document.getElementById("point").innerHTML = "u"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([4, 3])) {
    document.getElementById("point").innerHTML = "v"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([1, 3])) {
    document.getElementById("point").innerHTML = "w"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([3, 1])) {
    document.getElementById("point").innerHTML = "x"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([3, 2])) {
    document.getElementById("point").innerHTML = "y"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([2, 3])) {
    document.getElementById("point").innerHTML = "z"
    
  }
  else if (JSON.stringify(temp)==JSON.stringify([1, 4])) {
    document.getElementById("point").innerHTML = " "
    
  }
  
}
function submitFunction() {
  if (JSON.stringify(input)==JSON.stringify([1])) {
    output.push("a");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
 else if (JSON.stringify(input)==JSON.stringify([1,1])) {
    output.push("b");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
   else if (JSON.stringify(input)==JSON.stringify([1,1,1])) {
    output.push("c");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
   else if (JSON.stringify(input)==JSON.stringify([1,1,1,1])) {
    output.push("d");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([2])) {
    output.push("e");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([2,2])) {
    output.push("f");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([2, 2, 2])) {
    output.push("g");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([2,2,2,2])) {
    output.push("h");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([3])) {
    output.push("i");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([3,3])) {
    output.push("j");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([3,3,3])) {
    output.push("k");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([3,3,3,3])) {
    output.push("l");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([4])) {
    output.push("m");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([4, 4])) {
    output.push("n");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([4, 4, 4])) {
    output.push("o");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([4, 4, 4, 4])) {
    output.push("p");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([1, 2])) {
    output.push("q");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([2,1])) {
    output.push("r");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([2, 4])) {
    output.push("s");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([4, 2])) {
    output.push("t");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([3, 4])) {
    output.push("u");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([4, 3])) {
    output.push("v");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([1, 3])) {
    output.push("w");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([3, 1])) {
    output.push("x");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([3, 2])) {
    output.push("y");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([2, 3])) {
    output.push("z");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([1, 4])) {
    output.push(" ");
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  else if (JSON.stringify(input)==JSON.stringify([4, 1])) {
    output.pop();
    document.getElementById("demo").innerHTML = output.join("")
    
  }
  input = [];
  temp = [];
  document.getElementById("point").innerHTML = "_"
}

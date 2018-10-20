var input = [];
var output = [];
function firstFunction(){
  input.push(1);
  
}
function secondFunction(){
  input.push(2);
  
}
function thirdFunction(){
  input.push(3);
  
}
function forthFunction(){
  input.push(4);
  
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
}

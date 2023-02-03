module.exports = function check(str, bracketsConfig) {
  let arrOpenBrackets = [];
  let arrCloseBrackets = [];
  let stack = [];

  for(let i=0; i<bracketsConfig.length; i++){
    arrOpenBrackets.push(bracketsConfig[i][0]);
    arrCloseBrackets.push(bracketsConfig[i][1]);
  }

  for(let i=0; i<str.length; i++){
   let currentSimb = str[i];
    if(arrOpenBrackets.includes(currentSimb) && arrCloseBrackets.includes(currentSimb)){
      if(stack.length===0) stack.push(currentSimb);
      else { 
      let topEl = stack[stack.length - 1];
      if(topEl === currentSimb){stack.pop();}
      else stack.push(currentSimb);
      }
    }


   if(arrOpenBrackets.includes(currentSimb) && arrCloseBrackets.includes(currentSimb)===false){
      stack.push(currentSimb);
    }
    if(arrOpenBrackets.includes(currentSimb)===false && arrCloseBrackets.includes(currentSimb)){
      if(stack.length === 0) return false;
      
      let topEl = stack[stack.length - 1];
      let indexOpen = arrOpenBrackets.indexOf(topEl);
      if(currentSimb === arrCloseBrackets[indexOpen]){
        stack.pop();
      }
      else return false;
    }
  }
return (stack.length === 0);
}

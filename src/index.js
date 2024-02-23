var kaprekar = {
  constant: 6174,
  invalidNums: [1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999, 0],
  isValid: (num) => {
    var valid = true;
    kaprekar.invalidNums.forEach(i => {
      if(num - i == 0) {
        valid = false
      }
    })
    return valid;
  },
  arrangeAscending: (num, padding=true) => {
    var digits;
    if(typeof num === "number") {
      digits=num.toString().split('').map(Number).sort((a, b) => a - b);
    }
    else if(typeof num === "string") {
      digits=num.split('').map(Number).sort((a, b) => a - b);
    }

    if(padding) {
      var times = digits.length;
      for(i = times; i < 4; i++) {
        digits.unshift(0)
      }
    }
    
    return digits;
  },
  arrangeDescending: (num, padding=true) => {
    var digits;
    if(typeof num === "number") {
      digits=num.toString().split('').map(Number).sort((a, b) => b - a);
    }
    else if(typeof num === "string") {
      digits=num.split('').map(Number).sort((a, b) => b - a);
    }

    if(padding) {
      var times = digits.length;
      for(i = times; i < 4; i++) {
        digits.push(0)
      }
    }

    return digits;
  },
  routine: (num) => {
    if(!kaprekar.isValid(num)) {
      console.error("'" + num + "' is not a valid number for Kaprekar's routine! Requires at least two different digits.") 
    }
    else {
      
      var desc = Number(kaprekar.arrangeDescending(num).join(''));
      var asc  = Number(kaprekar.arrangeAscending(num).join(''));
      //console.log(desc)
      
      var iterations = 0;
      var result = 0;
      var output = "["
      while(result != 6174 && iterations < 8) {
        result = desc - asc;
        iterations++;

        if(iterations > 1) {output += "  "}
        else output += " ";
        output += kaprekar.arrangeDescending(desc).join('') + " - " + kaprekar.arrangeAscending(asc).join('') + " = " + result;
        if(result != 6174) output += "\n";
        
        desc = Number(kaprekar.arrangeDescending(result).join(''));
        asc  = Number(kaprekar.arrangeAscending(result).join(''));

        
        
      }
      output += " ]" + `\n`;
      console.log(output)

      console.log("Iterations: " + iterations);

    }
    
  }

}
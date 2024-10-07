/**
 * Usage: 
 * 
 * kaprekar.routine(num)
 * 
 * @param num number with at most 4 digits and at least 2 different digits
 * @returns Number of Iterations of Kaprekar's routine, as well as the equation
 *          for each step of the routine. 
 * 
 */
var kaprekar = {
  constant: 6174,
  invalidNums: [1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999, 0],
  isValid: (num) => {
    var valid = true;
    if(num.toString().split('').length > 4) return false;

    kaprekar.invalidNums.forEach(i => {
      if(num - i == 0) {
        valid = false
      }
    });

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
      console.error("'" + num + "' is not a valid number for Kaprekar's routine. Number must have at most four digits with at least two of them being different values.") 
    }
    else {
      
      var desc = Number(kaprekar.arrangeDescending(num).join(''));
      var asc  = Number(kaprekar.arrangeAscending(num).join(''));
      
      
      var result = 0;
      var output = {
        iterations: 0,
        steps: []
      };


      while(result != 6174 && output.iterations < 8) {
        result = desc - asc;
        output.iterations++;

        output.steps.push("" + kaprekar.arrangeDescending(desc).join('') + " - " + kaprekar.arrangeAscending(asc).join('') + " = " + result);
        
        desc = Number(kaprekar.arrangeDescending(result).join(''));
        asc  = Number(kaprekar.arrangeAscending(result).join(''));

      }
      
      return output;

    }
    
  }

}

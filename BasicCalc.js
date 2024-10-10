// SOLUTION 1
// Time Complexity: O(n)
// Space Complexity: O(n)
function calculate(s) {
  let stack = [];
  let currentNumber = 0;
  let result = 0;
  let sign = 1;

  for (let char of s) {
    if (char >= "0" && char <= "9") {
      currentNumber = currentNumber * 10 + parseInt(char);
    } else if (char === "+") {
      result += sign * currentNumber;
      sign = 1;
      currentNumber = 0;
    } else if (char === "-") {
      result += sign * currentNumber;
      sign = -1;
      currentNumber = 0;
    } else if (char === "(") {
      stack.push(result);
      stack.push(sign);
      result = 0;
      sign = 1;
    } else if (char === ")") {
      result += sign * currentNumber;
      currentNumber = 0;
      result = stack.pop() * result + stack.pop();
    }
  }

  return (result += sign * currentNumber);
}
console.log(calculate("1 + 1")); // 2
console.log(calculate(" 2-1 + 2 ")); // 3
console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // 23

// SOLUTION 2
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function calculate2(s) {
  let i = 0;

  return evaluate();

  function evaluate() {
    let result = 0;
    let currentNumber = 0;
    let sign = 1;

    while (i < s.length) {
      let char = s[i];

      if (char >= "0" && char <= "9") {
        currentNumber = currentNumber * 10 + parseInt(char);
      } else if (char === "+") {
        result += sign * currentNumber;
        currentNumber = 0;
        sign = 1;
      } else if (char === "-") {
        result += sign * currentNumber;
        currentNumber = 0;
        sign = -1;
      } else if (char === "(") {
        i++;
        result += sign * evaluate();
        currentNumber = 0;
      } else if (char === ")") {
        result += sign * currentNumber;
        return result;
      }

      i++;
    }

    return result + sign * currentNumber;
  }
}
console.log(calculate2("1 + 1")); // 2
console.log(calculate2(" 2-1 + 2 ")); // 3
console.log(calculate2("(1+(4+5+2)-3)+(6+8)")); // 23

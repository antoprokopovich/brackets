module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 != 0) {
    return false;
  }

  let stack = [];

  for ( let i = 0, strLen = str.length; i < strLen; i++ ) {
    for ( let j = 0, brLen = bracketsConfig.length; j < brLen; j++ ) {
      
      if (str[i] == bracketsConfig[j][0]) {
        
        if(bracketsConfig[j][0] == bracketsConfig[j][1]) { //the same brackets
          if(bracketsConfig[j][0] == stack[stack.length - 1]) {
            stack.pop();
          } else {
            stack.push(str[i]);
          }
        } else {
          stack.push(str[i]);
        }

      } else if (str[i] == bracketsConfig[j][1]) {
        if ((stack.length > 0) && (stack[stack.length - 1] == bracketsConfig[j][0])) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }

  return stack.length ? false : true;
}

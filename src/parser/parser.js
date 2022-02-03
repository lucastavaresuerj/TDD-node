import addParser from "./add/add.parser.js";
import add from "../math/arithmetic/add/add.js";

import subParser from "./sub/sub.parser.js";
import sub from "../math/arithmetic/subtraction/sub.js";

import parentheses from "./parentheses/parentheses.parser.js";

function parser(operation) {
  const isNumber = /^\d+(\.\d+)?$/g.test(operation);
  if (isNumber) {
    return parseFloat(operation);
  }

  const splitParentheses = parentheses(operation);
  const parsedParentheses = splitParentheses.reduce((acc, operationBlock) => {
    if (typeof operationBlock.p == "string") {
      return acc + parser(operationBlock.p);
    }
    return acc + operationBlock;
  }, "");

  const parseAdd = addParser(parsedParentheses);

  if (parseAdd.length == 2) {
    return parseAdd.reduce((acc, operator, index) => {
      if (index == 0) {
        return add(acc, parseFloat(operator));
      } else {
        return add(acc, parser(operator));
      }
    }, 0);
  } else {
    return subParser(parsedParentheses).reduce((acc, operator, index) => {
      if (index == 0) {
        return sub(acc, parseFloat(operator));
      } else {
        return sub(acc, parser(operator));
      }
    }, 0);
  }
}

export default parser;

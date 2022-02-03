import addParser from "./add/add.parser.js";
import add from "../math/arithmetic/add/add.js";

import subParser from "./sub/sub.parser.js";
import sub from "../math/arithmetic/subtraction/sub.js";

import parentheses from "./parentheses/parentheses.parser.js";

// console.log(parser("1 - 1"));

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
    return parseAdd.reduce((acc, operator) => {
      return add(parseFloat(acc), parser(operator));
    });
  } else {
    return subParser(parsedParentheses).reduce((acc, operator) => {
      return sub(parseFloat(acc), parser(operator));
    });
  }
}

export default parser;

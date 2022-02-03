function parenthesesParser(operation = "") {
  const separatorBlocks = { "(": ")", "[": "]", "{": "}" };
  const keys = {
    open: Object.keys(separatorBlocks),
    close: Object.values(separatorBlocks),
  };
  const parenthesesPile = [];

  const parsed = operation.split("").reduce(
    (acc, value, index) => {
      const accIndex = acc.length - 1;

      if (keys.open.includes(value)) {
        const pileLength = parenthesesPile.length;
        parenthesesPile.push(value);
        if (pileLength == 0) {
          if (index == 0) {
            acc[accIndex] = { p: "" };
          } else {
            acc.push({ p: "" });
          }
        } else {
          acc[accIndex].p = acc[accIndex].p + value;
        }
        return [...acc];
      }
      if (keys.close.includes(value)) {
        const openSeparator = parenthesesPile.pop();
        if (value != separatorBlocks[openSeparator]) {
          throw new Error(
            "Matching close separator different from the open separator"
          );
        }
        if (parenthesesPile.length == 0) {
          if (index + 1 != operation.length) {
            acc.push("");
          }
        } else {
          acc[accIndex].p = acc[accIndex].p + value;
        }
        return [...acc];
      }
      if (typeof acc[accIndex].p == "string") {
        acc[accIndex].p = acc[accIndex].p + value;
      } else {
        acc[accIndex] = acc[accIndex] ? acc[accIndex] + value : value;
      }
      return [...acc];
    },
    [""]
  );

  if (parenthesesPile.length) {
    throw new Error("Number of parentheses did not match");
  }

  return parsed;
}

export default parenthesesParser;

parenthesesParser("1654 + (2 + (3 + (256 - 12)) + 4) + 8 - (26 - 10) - 5");

function parenthesesParser(operation = "") {
  const separatorBlocks = { "(": ")", "[": "]", "{": "}" };
  const keys = {
    open: Object.keys(separatorBlocks),
    close: Object.values(separatorBlocks),
  };
  const parenthesesPile = [];

  return operation.split("").reduce(
    (acc, value) => {
      const accIndex = acc.length - 1;

      if (keys.open.includes(value)) {
        parenthesesPile.push(value);
        acc.push({ p: "" });
        return [...acc];
      }
      if (keys.close.includes(value)) {
        const close = parenthesesPile.pop(value);
        if (parenthesesPile.length == 0) {
          acc.push("");
        } else {
          acc[accIndex].p = acc[accIndex].p + close;
        }
        return [...acc];
      }

      if (acc[accIndex].p) {
        acc[accIndex].p = acc[accIndex].p + value;
      } else {
        acc[accIndex] = acc[accIndex] ? acc[accIndex] + value : value;
      }

      return [...acc];
    },
    [""]
  );

  return [
    "1654 + ",
    { p: "2 + (3 + (256 - 12)) + 4" },
    " + 8 - ",
    { p: "26 - 10" },
    " - 5",
  ];
}

export default parenthesesParser;

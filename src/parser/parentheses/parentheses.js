function parenthesesParser(operation) {
  return [
    "1654 + ",
    { p: "2 + (3 + (256 - 12)) + 4" },
    " + 8 - ",
    { p: "26 - 10" },
    " - 5",
  ];
}

export default parenthesesParser;

function addParser(operation = "") {
  const divideLeftRight = /(.*?) ?\+ ?(.*)/gi; // if "165 + 897 + 8186" then left is "165" and right is "897 + 8186"

  return operation
    .replace(divideLeftRight, (math, p1, p2) => {
      return [p1, p2];
    })
    .split(",");
}

export default addParser;

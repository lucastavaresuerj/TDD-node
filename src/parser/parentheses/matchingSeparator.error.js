export default class MatchingSeparatorError extends Error {
  constructor(recive, expect) {
    super(
      `Matching close separator different from the open separator, recive: "${recive}" but expect "${expect}"`
    );
    this.name = "MatchingSeparatorError";
    this.recive = recive;
    this.expect = expect;
  }
}

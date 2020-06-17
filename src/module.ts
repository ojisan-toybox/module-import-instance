import { instances } from "./data";

class Hoge {
  private constructor() {}

  static of() {
    return new Hoge();
  }
}

const registerModule = () => {
  instances.push(Hoge.of());
};

registerModule();

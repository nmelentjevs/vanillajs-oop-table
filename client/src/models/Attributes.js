export class Attributes {
  constructor(data) {
    this.data = data;
    this.get = (key) => {
      return this.data[key];
    };
  }
  set(update) {
    Object.assign(this.data, update);
  }
  getAll() {
    return this.data;
  }
}

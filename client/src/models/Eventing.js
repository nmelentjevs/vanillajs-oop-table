export class Eventing {
  constructor() {
    this.events = {};
    this.on = (eventName, callback) => {
      const handlers = this.events[eventName] || [];
      handlers.push(callback);
      this.events[eventName] = handlers;
    };
    this.trigger = (eventName) => {
      const handlers = this.events[eventName];
      if (!handlers || !handlers.length) {
        return;
      }
      handlers.forEach((callback) => {
        callback();
      });
    };
  }
}

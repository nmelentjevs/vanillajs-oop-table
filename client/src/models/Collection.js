import axios from 'axios';
import { Eventing } from './Eventing';
export class Collection {
  constructor(rootUrl, deserialize) {
    this.rootUrl = rootUrl;
    this.deserialize = deserialize;
    this.models = [];
    this.events = new Eventing();
  }

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  async fetch() {
    await axios.get(this.rootUrl).then((res) => {
      res.data.forEach((value) => {
        this.models.push(this.deserialize(value));
      });
    });
    this.trigger('change');
  }
}

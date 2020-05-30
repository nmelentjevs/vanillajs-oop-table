import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

const rootUrl = 'http://localhost:4000/people';

export class Person extends Model {
  static buildPerson(attrs) {
    return new Person(
      new Attributes(attrs),
      new Eventing(),
      new ApiSync(rootUrl)
    );
  }

  static buildPersonCollection() {
    return new Collection(rootUrl, (json) => Person.buildPerson(json));
  }

  setRandomAge() {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}

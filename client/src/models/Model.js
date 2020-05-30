export class Model {
  constructor(attributes, events, sync) {
    this.attributes = attributes;
    this.events = events;
    this.sync = sync;
    this.on = this.events.on;
    this.trigger = this.events.trigger;
    this.get = this.attributes.get;
  }
  set(update) {
    this.attributes.set(update);
    this.events.trigger('change');
  }
  fetch() {
    const id = this.attributes.get('id');
    this.sync.fetch(id).then((response) => {
      this.set(response.data);
    });
  }
  update() {
    const id = this.attributes.get('id');
    this.sync.update(id).then((response) => {
      this.trigger('update');
    });
  }
  delete() {
    const id = this.attributes.get('id');
    this.sync.delete(id).then((response) => {
      this.trigger('confirm-delete');
    });
  }
  save() {
    this.sync
      .save(this.attributes.getAll())
      .then((response) => {
        this.trigger('save');
      })
      .catch(() => this.trigger('erorr'));
  }
}

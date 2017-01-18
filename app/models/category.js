import Ember from 'ember';

export default Ember.Object.extend({
  label: "",
  tags: null,

  setDefaultTags: Ember.on('init', function() {
    if (!this.get('tags')) {
      this.set('tags', []);
    }
  }),

  spaceSeparatedTags: Ember.computed('tags', {
    get() {
      return this.get('tags').join(" ");
    },

    set(key, val) {
      const arr = val.split(/ +/).filter(str => str).map(str => str.toLowerCase());
      this.set('tags', arr);
      return val;
    },
  }),

  clone() {
    return this.constructor.create({
      label: this.get('label'),
      tags: Ember.copy(this.get('tags')),
    });
  },
});

import Ember from 'ember';

export default Ember.Controller.extend({
  modelLoader: Ember.inject.service('model-loader'),

  // used to keep track of whether we need to warn the user that they haven't
  // saved their changes
  saved: false,

  actions: {
    addRow(afterIndex) {
      const beforeIndex = afterIndex + 1;
      const label = window.prompt("Name");

      if (!label) {
        return;
      }

      this.get('model').addRow(label, beforeIndex);
    },

    save() {
      this.get('modelLoader').replaceWith(this.get('model'));
      this.set('saved', true);
      this.transitionToRoute('index');
    },

    loadDefault() {
      const text = "Are you sure? This will overwrite all of your choices with the defaults.";
      if (window.confirm(text)) {
        this.set('saved', true);
        this.get('modelLoader').loadDefault().then(() => {
          this.transitionToRoute('index');
        })
      }
    },
  },
});

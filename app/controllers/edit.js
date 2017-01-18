import Ember from 'ember';

export default Ember.Controller.extend({
  modelLoader: Ember.inject.service('model-loader'),

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
      this.transitionToRoute('index');
    },
  },
});

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addRow(afterIndex) {
      const beforeIndex = afterIndex + 1;
      const label = window.prompt("Name");

      if (!label) {
        return;
      }

      this.get('model').addRow(label, beforeIndex);
    },
  },
});

import Ember from 'ember';

export default Ember.Route.extend({
  modelLoader: Ember.inject.service('model-loader'),

  model() {
    return this.get('modelLoader').find().then(model => model.clone());
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('saved', false);
  },

  actions: {
    willTransition(transition) {
      const saved = this.controller.get('saved');
      if (saved) {
        return true;
      }

      const message = "Are you sure? You haven't saved your changes";
      if (!window.confirm(message)) {
        transition.abort();
      }

      return true;
    },
  },
});

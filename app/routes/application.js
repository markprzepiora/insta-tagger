import Ember from 'ember';

export default Ember.Route.extend({
  modelLoader: Ember.inject.service('model-loader'),

  model() {
    return this.get('modelLoader').find();
  },
});

import Ember from 'ember';

function fetchJSON(url) {
  return Ember.$.getJSON(url);
}

function emberCreate(obj) {
  return Ember.Object.create(obj);
}

export default Ember.Route.extend({
  model() {
    return fetchJSON('/assets/tags.json').then(tags => tags.map(emberCreate));
  },
});

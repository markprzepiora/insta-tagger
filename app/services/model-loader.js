import Ember from 'ember';

function fetchJSON(url) {
  return Ember.$.getJSON(url);
}

function emberCreate(obj) {
  return Ember.Object.create(obj);
}

function mapEmberCreate(arr) {
  return arr.map(emberCreate);
}

export default Ember.Service.extend({
  find() {
    return fetchJSON('/assets/tags.json').then(mapEmberCreate);
  },
});

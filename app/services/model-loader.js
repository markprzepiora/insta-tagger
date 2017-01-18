import Ember from 'ember';
import Model from 'instagram-tagger/models/model';
import Category from 'instagram-tagger/models/category';

function fetchJSON(url) {
  return Ember.$.getJSON(url);
}

function createCategory(obj) {
  return Category.create(obj);
}

function createModel(arr) {
  return Model.create({
    categories: arr.map(createCategory)
  });
}

export default Ember.Service.extend({
  find() {
    return fetchJSON('/assets/tags.json').then(createModel);
  },
});

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

function loadFromLocalStorage() {
  const payload = window.localStorage.getItem('instagram-tagger--model');
  if (!payload) {
    return null;
  }

  const json = JSON.parse(payload);
  return createModel(json);
}

function saveToLocalStorage(model) {
  const jsonString = model.toJSONString();
  window.localStorage.setItem('instagram-tagger--model', jsonString);
}

export default Ember.Service.extend({
  loadDefault() {
    const promise = fetchJSON('/assets/tags.json').then(createModel);
    promise.then(model => {
      saveToLocalStorage(model);
    });
    return promise;
  },

  find() {
    const currentModel = loadFromLocalStorage();

    if (currentModel) {
      return Ember.RSVP.resolve(currentModel);
    } else {
      return this.loadDefault();
    }
  },

  replaceWith(newModel) {
    saveToLocalStorage(newModel);
  },
});

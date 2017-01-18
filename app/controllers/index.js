import Ember from 'ember';

function flatten(array) {
  return array.reduce(function(a, b) {
      return a.concat(b);
  }, []);
}

export default Ember.Controller.extend({
  categories: Ember.computed.alias('model.categories'),
  selectedChoices: Ember.computed.filterBy('categories', 'selected', true),
  _selectedTags: Ember.computed.mapBy('selectedChoices', 'tags'),
  selectedTags: Ember.computed('_selectedTags.[]', function() {
    return flatten(this.get('_selectedTags'));
  }),
  selectedTagString: Ember.computed('selectedTags.[]', function() {
    return this.get('selectedTags').map(tag => `#${tag}`).join(" ");
  }),

  actions: {
    copy() {
      const textarea = document.querySelector('.js-tags');
      textarea.select();
      document.execCommand('copy');
    },
  },
});

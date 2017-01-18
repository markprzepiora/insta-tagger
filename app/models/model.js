import Ember from 'ember';
import Category from './category';

export default Ember.Object.extend({
  categories: null,
  setDefaultCategories: Ember.on('init', function() {
    if (!this.get('categories')) {
      this.set('categories', []);
    }
  }),

  addRow(label, beforeIndex) {
    const newCategory = Category.create({ label: label, tags: [] });
    const oldCategories = this.get('categories');
    const newCategories = [
      ...oldCategories.slice(0, beforeIndex),
      newCategory,
      ...oldCategories.slice(beforeIndex)
    ];

    this.set('categories', newCategories);
  },

  clone() {
    return this.constructor.create({
      categories: this.get('categories').map(cat => cat.clone())
    });
  },

  toJSONString() {
    return JSON.stringify(this.get('categories'));
  },
});

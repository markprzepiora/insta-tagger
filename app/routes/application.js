import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        label: "Film photography",
        tags: ["ishootfilm", "filmisnotdead", "believeinfilm", "analogphotography", "analogfilm", "buyfilmnotmegapixels", "filmphoto", "filmshooters", "staybrokeshootfilm", "フィルム", "フィルムカメラ", "フィルム写真"]
      },
      {
        label: "Medium format",
        tags: ["mediumformat", "mediumformatfilm"]
      },
      {
        label: "35mm",
        tags: ["35mm", "35mmfilm"]
      },
      {
        label: "Mamiya C220",
        tags: ["6x6", "mamiyac220"]
      },
      {
        label: "Tri-X",
        tags: ["trix400", "kodaktrix", "kodaktrix400"]
      },
      {
        label: "B&W",
        tags: ["monochrome", "bnwphotography"]
      },
      {
        label: "Landscape",
        tags: ["landscape", "landscapephotography"]
      },
      {
        label: "Calgary",
        tags: ["calgary", "yyc"]
      },
    ].map(obj => Ember.create(obj));
  },
});

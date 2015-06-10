Dota2Stats.HeroesController = Ember.ArrayController.extend({
  addingHero: false,
  actions: {
    addHero: function() {
      this.set('addingHero', true);
    }
  }
});

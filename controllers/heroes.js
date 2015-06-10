Dota2Stats.HeroesController = Ember.ArrayController.extend({
  addingHero: false,
  primaryStats: ["Int", "Agi", "Str"],

  actions: {

    addHero: function() {
      this.set('addingHero', true);
    }
  }
});

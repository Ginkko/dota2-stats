Dota2Stats.HeroInfoRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('hero', params.hero_id);
  }
});

Dota2Stats.HeroRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('hero', params.hero_id);
  }
});

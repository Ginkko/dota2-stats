Dota2Stats.HeroesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('hero');
  }
});

Dota2Stats.GamesRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      games: this.store.find('game'),
      heroes: this.store.find('hero')
    });
  }
});

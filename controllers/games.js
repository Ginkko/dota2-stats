Dota2Stats.GamesController = Ember.ObjectController.extend({
  needs: ['hero-info'],
  radiantTeam: [],
  avaliableHeroes: [],
  gameFormToggled: false,

  actions: {

    gameFormToggle: function() {
      this.set('gameFormToggled', true);
      for (var i = 0; i < this.store.find('hero').length; i++) {
        this.get('availableHeroes').pushObject(this.store.find('hero')[i]);
      }
    }

  }
});

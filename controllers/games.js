Dota2Stats.GamesController = Ember.ObjectController.extend({
  needs: ['hero-info'],
  radiantTeam: [],
  gameFormToggled: false,
  actions: {

    gameFormToggle: function() {
      this.set('gameFormToggled', true);
    }

  }
});

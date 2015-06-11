Dota2Stats.HeroInfoController = Ember.ObjectController.extend({
  needs: ['games'],
  actions: {
    addRadiant: function() {
      this.get('controllers.games.radiantTeam').pushObject(this);
      debugger;
    }
  }
});

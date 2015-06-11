Dota2Stats.HeroInfoController = Ember.ObjectController.extend({
  needs: ['games'],
  actions: {
    addRadiant: function() {
      var currentHero = this.store.find('hero', this.get('id'));
      this.get('controllers.games.radiantTeam').pushObject(currentHero);
    }
  }
});

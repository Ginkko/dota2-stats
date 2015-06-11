Dota2Stats.HeroInfoController = Ember.ObjectController.extend({
  isRadiantFull: false,
  needs: ['games'],
  actions: {
    addRadiant: function() {
      var currentHero = this.store.find('hero', this.get('id'));

      debugger;
      var isAdded = false;
      var radiantTeam = this.get('controllers.games.radiantTeam');

      for (var i = 0; i < radiantTeam.length; i++) {
        if (radiantTeam[i].name === currentHero.name) {
          isAdded = true;
        }
      }

      if(!isAdded) {

        this.get('controllers.games.radiantTeam').pushObject(currentHero);
        this.get('controllers.games.avaliableHeroes').removeObject(currentHero);

      }

      if (this.get('controllers.games.radiantTeam').length === 5) {
        this.set('isRadiantFull', true);
      }
    }
  }
});

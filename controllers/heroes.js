Dota2Stats.HeroesController = Ember.ArrayController.extend({
  heroFormToggled: false,
  primaryStats: ["Int", "Agi", "Str"],
  roles: ["Hard Carry", "Semi-Carry", "Support", "Roamer", "Ganker", "Initiator", "Durable", "Disabler"],

  actions: {

    heroFormToggle: function() {
      this.set('heroFormToggled', true);
    },

    saveHero: function() {
      var roles = this.get('roles');
      var checkedRoles = [];
      for(var i = 0; i < roles.length; i++) {
        if(this.get(roles[i])) {
          checkedRoles.push(roles[i]);
        }
      }
      var newHero = this.store.createRecord('hero', {
        name: this.get('name'),
        primaryStat: this.get('primaryStat'),
        roles: checkedRoles
      });
      newHero.save();
      this.set('heroFormToggled', false);
      // this.transitionToRoute('home');
    }

  }
});

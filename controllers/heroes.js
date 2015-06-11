Dota2Stats.HeroesController = Ember.ArrayController.extend({
  heroFormToggled: false,
  primaryStats: ["Int", "Agi", "Str"],
  roles: {
    "Hard Carry": undefined,
    "Semi-Carry": undefined,
    "Support": undefined,
    "Roamer": undefined,
    "Ganker": undefined,
    "Initiator": undefined,
    "Durable": undefined,
    "Disabler": undefined
  },

  actions: {

    heroFormToggle: function() {
      this.set('heroFormToggled', true);
    },

    saveHero: function() {
      this.get('roles')["Hard Carry"] = this.get('hardCarry');
      this.get('roles')["Semi-Carry"] = this.get('semiCarry');
      this.get('roles')["Support"] = this.get('support');
      this.get('roles')["Roamer"] = this.get('roamer');
      this.get('roles')["Ganker"] = this.get('ganker');
      this.get('roles')["Initiator"] = this.get('initiator');
      this.get('roles')["Durable"] = this.get('durable');
      this.get('roles')["Disabler"] = this.get('disabler');

      var checkedRoles = [];
      for (var key in this.get('roles')) {
        if(this.get('roles')[key] === true) {
          checkedRoles.push(key);
        }
      }

      var newHero = this.store.createRecord('hero', {
        name: this.get('name'),
        primaryStat: this.get('primaryStat'),
        roles: checkedRoles
      });
      newHero.save();
      this.set('heroFormToggled', false);
    }

  }
});

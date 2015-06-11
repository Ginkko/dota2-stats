

Dota2Stats.HeroesController = Ember.ArrayController.extend({
  heroFormToggled: false,
  primaryStats: ["Int", "Agi", "Str"],
  roles: ["Hard Carry", "Semi-Carry", "Support", "Roamer", "Ganker", "Initiator", "Durable", "Disabler"],
  checkedRoles: [],

  hardCarry:undefined,
  watchHardCarry: function(){
    console.log("Hard Carry:" + this.get('hardCarry'));
    if (this.get('hardCarry')) {
        this.get('checkedRoles').push("Hard Carry");
    } else {
      this.get('checkedRoles').splice( this.get('checkedRoles').indexOf('Hard Carry'), 1 );
    }
    console.log(this.get('checkedRoles'));
  }.observes('hardCarry'),

  actions: {

    heroFormToggle: function() {
      this.set('heroFormToggled', true);
    },

    saveHero: function() {
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

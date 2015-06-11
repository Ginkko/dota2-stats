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

  semiCarry:undefined,
  watchSemiCarry: function(){
    console.log("Semi-Carry:" + this.get('semiCarry'));
    if (this.get('semiCarry')) {
        this.get('checkedRoles').push("Semi-Carry");
    } else {
      this.get('checkedRoles').splice( this.get('checkedRoles').indexOf('Semi-Carry'), 1 );
    }
    console.log(this.get('checkedRoles'));
  }.observes('semiCarry'),

  support:undefined,
  watchSupport: function(){
    console.log("Support:" + this.get('support'));
    if (this.get('support')) {
        this.get('checkedRoles').push("Support");
    } else {
      this.get('checkedRoles').splice( this.get('checkedRoles').indexOf('Support'), 1 );
    }
    console.log(this.get('checkedRoles'));
  }.observes('support'),

  roamer:undefined,
  watchRoamer: function(){
    console.log("Roamer:" + this.get('roamer'));
    if (this.get('roamer')) {
        this.get('checkedRoles').push("Roamer");
    } else {
      this.get('checkedRoles').splice( this.get('checkedRoles').indexOf('Roamer'), 1 );
    }
    console.log(this.get('checkedRoles'));
  }.observes('roamer'),

  ganker:undefined,
  watchGanker: function(){
    console.log("Ganker:" + this.get('ganker'));
    if (this.get('ganker')) {
        this.get('checkedRoles').push("Ganker");
    } else {
      this.get('checkedRoles').splice( this.get('checkedRoles').indexOf('Ganker'), 1 );
    }
    console.log(this.get('checkedRoles'));
  }.observes('ganker'),

  initiator:undefined,
  watchInitiator: function(){
    console.log("Initiator:" + this.get('initiator'));
    if (this.get('initiator')) {
        this.get('checkedRoles').push("Initiator");
    } else {
      this.get('checkedRoles').splice( this.get('checkedRoles').indexOf('Initiator'), 1 );
    }
    console.log(this.get('checkedRoles'));
  }.observes('initiator'),

  durable:undefined,
  watchDurable: function(){
    console.log("Durable:" + this.get('durable'));
    if (this.get('durable')) {
        this.get('checkedRoles').push("Durable");
    } else {
      this.get('checkedRoles').splice( this.get('checkedRoles').indexOf('Durable'), 1 );
    }
    console.log(this.get('checkedRoles'));
  }.observes('durable'),

  disabler:undefined,
  watchDisabler: function(){
    console.log("Disabler:" + this.get('disabler'));
    if (this.get('disabler')) {
        this.get('checkedRoles').push("Disabler");
    } else {
      this.get('checkedRoles').splice( this.get('checkedRoles').indexOf('Disabler'), 1 );
    }
    console.log(this.get('checkedRoles'));
  }.observes('disabler'),


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

Dota2Stats.HeroesController = Ember.ArrayController.extend({
  heroFormToggled: false,
  primaryStats: ["Int", "Agi", "Str"],
  roles: {
    hardCarry: undefined,
    semiCarry: undefined,
    support: undefined,
    roamer: undefined,
    ganker: undefined,
    initiator: undefined,
    durable: undefined,
    disabler: undefined
  },

  // hardCarry:undefined,
  // watchHardCarry: function(){
  //   console.log("Hard Carry:" + this.get('hardCarry'));
  //   if (this.get('hardCarry')) {
  //       this.get('checkedRoles').push("Hard Carry");
  //   } else {
  //     this.get('checkedRoles').splice( this.get('checkedRoles').indexOf('Hard Carry'), 1 );
  //   }
  //   console.log(this.get('checkedRoles'));
  // }.observes('hardCarry'),
  //
  // semiCarry:undefined,
  // watchSemiCarry: function(){
  //   console.log("Semi-Carry:" + this.get('semiCarry'));
  //   if (this.get('semiCarry')) {
  //       this.get('checkedRoles').push("Semi-Carry");
  //   } else {
  //     this.get('checkedRoles').splice( this.get('checkedRoles').indexOf('Semi-Carry'), 1 );
  //   }
  //   console.log(this.get('checkedRoles'));
  // }.observes('semiCarry'),
  //
  // support:undefined,
  // watchSupport: function(){
  //   console.log("Support:" + this.get('support'));
  //   if (this.get('support')) {
  //       this.get('checkedRoles').push("Support");
  //   } else {
  //     this.get('checkedRoles').splice( this.get('checkedRoles').indexOf('Support'), 1 );
  //   }
  //   console.log(this.get('checkedRoles'));
  // }.observes('support'),
  //
  // roamer:undefined,
  // watchRoamer: function(){
  //   console.log("Roamer:" + this.get('roamer'));
  //   if (this.get('roamer')) {
  //       this.get('checkedRoles').push("Roamer");
  //   } else {
  //     this.get('checkedRoles').splice( this.get('checkedRoles').indexOf('Roamer'), 1 );
  //   }
  //   console.log(this.get('checkedRoles'));
  // }.observes('roamer'),
  //
  // ganker:undefined,
  // watchGanker: function(){
  //   console.log("Ganker:" + this.get('ganker'));
  //   if (this.get('ganker')) {
  //       this.get('checkedRoles').push("Ganker");
  //   } else {
  //     this.get('checkedRoles').splice( this.get('checkedRoles').indexOf('Ganker'), 1 );
  //   }
  //   console.log(this.get('checkedRoles'));
  // }.observes('ganker'),
  //
  // initiator:undefined,
  // watchInitiator: function(){
  //   console.log("Initiator:" + this.get('initiator'));
  //   if (this.get('initiator')) {
  //       this.get('checkedRoles').push("Initiator");
  //   } else {
  //     this.get('checkedRoles').splice( this.get('checkedRoles').indexOf('Initiator'), 1 );
  //   }
  //   console.log(this.get('checkedRoles'));
  // }.observes('initiator'),
  //
  // durable:undefined,
  // watchDurable: function(){
  //   console.log("Durable:" + this.get('durable'));
  //   if (this.get('durable')) {
  //       this.get('checkedRoles').push("Durable");
  //   } else {
  //     this.get('checkedRoles').splice( this.get('checkedRoles').indexOf('Durable'), 1 );
  //   }
  //   console.log(this.get('checkedRoles'));
  // }.observes('durable'),
  //
  // disabler:undefined,
  // watchDisabler: function(){
  //   console.log("Disabler:" + this.get('disabler'));
  //   if (this.get('disabler')) {
  //       this.get('checkedRoles').push("Disabler");
  //   } else {
  //     this.get('checkedRoles').splice( this.get('checkedRoles').indexOf('Disabler'), 1 );
  //   }
  //   console.log(this.get('checkedRoles'));
  // }.observes('disabler'),


  actions: {

// roles: ["Hard Carry", "Semi-Carry", "Support", "Roamer", "Ganker", "Initiator", "Durable", "Disabler"],

    heroFormToggle: function() {
      this.set('heroFormToggled', true);
    },

    saveHero: function() {
      this.get('roles').hardCarry = this.get('hardCarry');
      this.get('roles').semiCarry = this.get('semiCarry');
      this.get('roles').support = this.get('support');
      this.get('roles').roamer = this.get('roamer');
      this.get('roles').ganker = this.get('ganker');
      this.get('roles').initiator = this.get('initiator');
      this.get('roles').durable = this.get('durable');
      this.get('roles').disabler = this.get('disabler');

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
      debugger;
      newHero.save();
      this.set('heroFormToggled', false);
    }

  }
});

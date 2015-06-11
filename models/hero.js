Dota2Stats.Hero = DS.Model.extend({
  name: DS.attr(),
  primaryStat: DS.attr(),
  roles: DS.attr(),
  games: DS.hasMany('game', {async: true})
});

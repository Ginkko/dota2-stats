Dota2Stats.Game = DS.Model.extend({
  name: DS.attr(),
  datePlayed: DS.attr(),
  radiantTeam: DS.attr(),
  direTeam: DS.attr(),
  isRadiantVictory: DS.attr(),
  hero: DS.belongsTo('hero', {async: true})
});

Dota2Stats.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('heroes');
  this.resource('hero', {path: 'heroes/:hero_id'});
});

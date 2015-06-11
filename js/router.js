Dota2Stats.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('heroes');
  this.resource('games', function () {
    this.resource('hero-info', {path: ':hero_id'});
  });
  this.resource('hero', {path: 'heroes/:hero_id'});
});

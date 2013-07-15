App.PeopleIndexRoute = Ember.Route.extend
(
  {
    model: function()
    {
      var loggedIn = this.controllerFor('login').get('loggedInCheck');

console.log("Logueado en people? -> " + loggedIn);

      if(!loggedIn)
      {
        this.transitionTo('login');
      }
      else
      {
        return App.Person.find();
      }
    }
  }
);
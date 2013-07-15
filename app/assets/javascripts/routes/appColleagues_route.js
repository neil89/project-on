App.AppColleaguesRoute = Ember.Route.extend
(
  {
    model: function()
    {
      var loggedIn = this.controllerFor('login').get('loggedInCheck');

console.log("Logueado en colleagues? -> " + loggedIn);

      if(!loggedIn)
      {
        this.transitionTo('login');
      }
      else
      {
        var personId = this.controllerFor('app').get('personId');

        return App.Person.find();
      }
    }
  }
);
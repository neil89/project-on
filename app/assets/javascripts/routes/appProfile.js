App.AppProfileRoute = Ember.Route.extend
(
  {
    model: function()
    {
      //var loggedIn = this.controllerFor('app').get('loggedIn');
      var loggedIn = this.controllerFor('login').get('loggedInCheck');

console.log("Logueado en profile? -> " + loggedIn);

      if(!loggedIn)
      {
        this.transitionTo('login');
      }
      else
      {
        var personId = this.controllerFor('app').get('personId');

        return App.Person.find(personId);
        //return App.Person.find(personId).get('profiles');
      }
    },

    events:
    {
      goToLogin: function()
      {
        this.transitionTo('login');
      }
    }
  }
);
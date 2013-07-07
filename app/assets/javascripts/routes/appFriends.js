App.AppFriendsRoute = Ember.Route.extend
(
  {
    model: function()
    {
      //var loggedIn = this.controllerFor('app').get('loggedIn');
      var loggedIn = this.controllerFor('login').get('loggedInCheck');

console.log("Logueado en friends? -> " + loggedIn);

      if(!loggedIn)
      {
        this.transitionTo('login');
      }
      else
      {
        var personId = this.controllerFor('app').get('personId');

        return App.Person.find(personId).get('friends');
      }
    }
  }
);
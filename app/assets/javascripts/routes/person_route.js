App.PersonRoute = Ember.Route.extend
(
  {
    model: function(params)
    {
      var loggedIn = this.controllerFor('login').get('loggedInCheck');

console.log("Logueado en people.person? -> " + loggedIn);

      if(!loggedIn)
      {
        this.transitionTo('login');
      }
      else
      {
        return App.Person.find(params.person_id);
      }
    }
  }
);
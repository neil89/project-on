App.PersonProfileRoute = Ember.Route.extend
(
  {
    model: function(params)
    {
      var loggedIn = this.controllerFor('login').get('loggedInCheck');

console.log("Logueado en people.person.profile? -> " + loggedIn);

      if(!loggedIn)
      {
        this.transitionTo('login');
      }
      else
      {
        var p = this.modelFor("person");

console.log("PERSON_PROFILE - Buscando a la persona con id = *" + p.person_id + "*");
        return p;
      }
    }
  }
);
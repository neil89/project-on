App.PersonProjectsRoute = Ember.Route.extend
(
  {
    model: function(params)
    {
console.log("Controlador de people.person.projects");
    /*
      var loggedIn = this.controllerFor('login').get('loggedInCheck');

console.log("Logueado en person? -> " + loggedIn);

      if(!loggedIn)
      {
        this.transitionTo('login');
      }
      else
      {
        var personId = this.controllerFor('app').get('personId');
*/
        return App.Person.find(params.person_id);
      //}
    }
  }
);
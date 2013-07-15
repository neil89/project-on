App.PersonProjectsIndexRoute = Ember.Route.extend
(
  {
    model: function(params)
    {
console.log("Controlador de people.person.projects");

      var loggedIn = this.controllerFor('login').get('loggedInCheck');

console.log("Logueado en person? -> " + loggedIn);

      if(!loggedIn)
      {
        this.transitionTo('login');
      }
      else
      {
        var personId = this.modelFor('person').get('id');

        this.controllerFor('personProjects').set('thisPersonId', personId);

        return App.Project.find();
      }
    }
  }
);
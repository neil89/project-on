App.PersonProjectsProjectRoute = Ember.Route.extend
(
  {
    model: function(params)
    {
console.log("Controlador de people.person.projects.project!");

      var loggedIn = this.controllerFor('login').get('loggedInCheck');

console.log("Logueado en person? -> " + loggedIn);

      if(!loggedIn)
      {
        this.transitionTo('login');
      }
      else
      {
        return App.Project.find(params.project_id);
      }
    }
  }
);
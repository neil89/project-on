App.ProjectsProjectRoute = Ember.Route.extend
(
  {
    model: function(params)
    {
      var loggedIn = this.controllerFor('login').get('loggedInCheck');

console.log("Logueado en projects.project? -> " + loggedIn);

      if(!loggedIn)
      {
        this.transitionTo('login');
      }
      else
      {
        return App.Project.find(params.project_id);
      }
    },

    events:
    {
      goToProjectsIndex: function()
      {
        this.transitionTo('projects.index');
      }
    }
  }
);
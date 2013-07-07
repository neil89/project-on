App.ProjectsNewRoute = Ember.Route.extend
(
  {
    events:
    {
      goToProjectsIndex: function()
      {
        this.transitionTo('projects.index', App.Project.find());
      }
    }
  }
);
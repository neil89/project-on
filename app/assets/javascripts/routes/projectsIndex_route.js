App.ProjectsIndexRoute = Ember.Route.extend
(
  {
    model: function()
    {
      var loggedIn = this.controllerFor('login').get('loggedInCheck');

console.log("Logueado en projects.index? -> " + loggedIn);

      if(!loggedIn)
      {
        this.transitionTo('login');
      }
      else
      {
        return App.Project.find();
      }
    }
  }
);
App.AppRoute = Ember.Route.extend
(
  {
    redirect: function()
    {
      var loggedIn = this.controllerFor('login').get('loggedInCheck');

console.log("Logueado en app? -> " + loggedIn);

      if(!loggedIn)
      {
        this.transitionTo('login');
      }
    }
  }
);
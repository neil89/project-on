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
/*      
      else
      {
        //this.set('controllers.app.location', this.router.location.location.hash);
        //var location = this.get('controllers.app.location');
        //this.transitionTo('app' + location);


        //this.transitionTo('app.board');

        var location = this.get('controllers.app.location');

        if (location.charAt(2).toUpperCase() == 'B')
          this.transitionTo('app.board');
        if (location.charAt(2).toUpperCase() == 'F')
          this.transitionTo('app.friends');
        if (location.charAt(2).toUpperCase() == 'C')
          this.transitionTo('app.colleagues');
        if (location.charAt(2).toUpperCase() == 'P')
          this.transitionTo('app.profile');
      }
*/
    }
  }
);
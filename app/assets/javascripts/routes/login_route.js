App.LoginRoute = Ember.Route.extend
(
  {
    model: function()
    {
      return App.Person.find();
    },

    events:
    {
      goToAppBoard: function()
      {
        this.transitionTo('app.board');
      },

      goToAppFriends: function()
      {
        this.transitionTo('app.friends');
      },

      goToAppColleagues: function()
      {
        this.transitionTo('app.colleagues');
      },

      goToAppProfile: function()
      {
        this.transitionTo('app.profile');
      }
    }
  }
);
App.AppController = Ember.ArrayController.extend
(
  {
    loggedIn: false,
    personId: -1,
    personName: '',
    location: '',

    logOut: function()
    {
      if (window.confirm("¿Quieres cerrar la sesión?"))
      {
        this.set('loggedIn', false);
        this.set('personId', -1);
        this.set('personName', '');
        this.set('location', '');
        this.send('goToLogin');
      }
    }
  }
);

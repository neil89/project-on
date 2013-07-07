App.LoginController = Ember.ObjectController.extend
(
  {
    needs: ['app'],

    loginAction: function(email, password)
    {
      console.log("Email: " + email + ", Password: " + password);

      var people = this.get('model').toArray();

      for(var i=0; i<people.length; i++)
      {
        if (email == people[i].get('email'))
        {
          if (password == people[i].get('password'))
          {
            this.set('controllers.app.loggedIn', true);
            this.set('controllers.app.personId', people[i].get('id'));
            this.set('controllers.app.personName', people[i].get('name'));

            var locationChar = this.get('controllers.app.location').charAt(2).toUpperCase();

            switch(locationChar)
            {
              case 'F': this.send('goToAppFriends');    break;
              case 'C': this.send('goToAppColleagues'); break;
              case 'P': this.send('goToAppProfile');    break;
              default:  this.send('goToAppBoard');      break;
            }
          }
        }
      }
    },

    loggedInCheck: function()
    {
      var flag = true;
      var loggedIn = this.get('controllers.app.loggedIn');

    console.log("Logueado? -> " + loggedIn);

      if(!loggedIn)
      {
        this.set('controllers.app.loggedIn', false);
        this.set('controllers.app.personId', -1);
        this.set('controllers.app.personName', '');
        this.set('controllers.app.location', this.target.location.location.hash);
        flag = false;
      }
      else
      {
        var personId = this.get('controllers.app.personId');

        if (personId !== "-1")
        {
          var personName = this.get('controllers.app.personName');
          var queryPersonName = App.Person.find(personId).get('name');

          if (personName !== queryPersonName)
          {
            this.set('controllers.app.loggedIn', false);
            this.set('controllers.app.personId', -1);
            this.set('controllers.app.personName', '');
            this.set('controllers.app.location', this.target.location.location.hash);
            flag = false;
          }
        }

        else
        {
          this.set('controllers.app.loggedIn', false);
          this.set('controllers.app.personId', -1);
          this.set('controllers.app.personName', '');
          this.set('controllers.app.location', this.target.location.location.hash);
          flag = false;
        }
      }

      return flag;
    }.property('controllers.app.loggedIn',
               'controllers.app.personId',
               'controllers.app.personName')
  }
);
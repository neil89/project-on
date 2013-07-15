App.PersonProjectsIndexController = Ember.ArrayController.extend
(
  {
    thisPersonId: '',

    created: function()
    {
      //var personId = this.get('controllers.app.personId');

      var arr = ['red', 'blue', 'green'];

return arr;
    },

    coworker: function()
    {
      //var personId = this.get('controllers.app.personId');

      var arr = ['orange', 'yellow', 'purple'];

return arr;
    }
  }
);
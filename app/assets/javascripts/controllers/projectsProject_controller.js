App.ProjectsProjectController = Ember.ObjectController.extend
(
  {
    cwList: function()
    {
      var cw = this.get('model.coworkers');
    }
  }
);
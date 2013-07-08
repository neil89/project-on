App.ProjectsProjectController = Ember.ObjectController.extend
(
  {
    cwList: function()
    {
      console.log("Controladodr ProjectsProject");

      var cw = this.get('model.coworkers');

      return "coworkersss";
    }
  }
);
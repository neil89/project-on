App.ProjectsProjectController = Ember.ObjectController.extend
(
  {
    isEditing: false,

    editProject: function()
    {
      this.set('isEditing', true);
    },

    updateProject: function()
    {
      this.set('isEditing', false);

      var editProject = this.get('model');
      var transaction = editProject.get('store').transaction();
      transaction.add(editProject);
      this.transaction = transaction;

      this.transaction.commit();
      this.transaction = null;
    },

    destroyProject: function()
    {
      if (window.confirm("¿Estás seguro de que quieres eliminar este proyecto?"))
      {
        this.get('model').deleteRecord();
        this.get('store').commit();

        this.send('goToProjectsIndex');
      }
    }
  }
);
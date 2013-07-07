App.ProjectsNewController = Ember.ObjectController.extend
(
  {
    needs: ['app'],
    projectTitle: null,
    startingDate: null,
    endingDate: null,
    description: null,

    createProject: function()
    {
      var pTitle =        this.get('projectTitle');
      var pStartingDate = this.get('startingDate');
      var pEndingDate =   this.get('endingDate');
      var pDescription =  this.get('description');

      var personId = this.get('controllers.app.personId');
      var person = App.Person.find(personId);

      this.transaction = this.get('store').transaction();

      var newProject = this.transaction.createRecord
      (
        App.Project,
        {
          title: pTitle,
          startingDate: pStartingDate,
          endingDate: pEndingDate,
          description: pDescription,
          creator: person
        }
      );

      this.set('model', newProject);

/*
      var coworkersArray = [];
      coworkersArray.push(App.Person.find(2));
      this.get('model.coworkers').pushObject(coworkersArray);
*/

      this.transaction.commit();
      this.transaction = null;

      this.send('goToProjectsIndex');

      console.log("GUARDADO Titulo: " + pTitle + ", fecha inicio: " + pStartingDate + ", fecha fin: " + pEndingDate + ", description: " + pDescription);
    }
  }
);
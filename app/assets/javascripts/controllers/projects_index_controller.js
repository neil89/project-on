App.ProjectsIndexController = Ember.ArrayController.extend
(
  {
    needs: ['app'],

    created: function()
    {
      var personId = this.get('controllers.app.personId');

      var projects = this.get('model').toArray();
      var pCreated = [];

      for (var i=0; i<projects.length; i++)
      {
        if (projects[i].get('creator').get('id') == personId)
        {
          pCreated.push(projects[i]);
        }
      }

      return pCreated;
    }.property('App.Project.creator', 'App.Person.projectsCreated'),

    coworker: function()
    {
      var personId = this.get('controllers.app.personId');

      var projects = this.get('model').toArray();
      var pCoworkers;
      var pCollab = [];

      for (var i=0; i<projects.length; i++)
      {
        pCoworkers = projects[i].get('coworkers').toArray();

        for (var j=0; j<pCoworkers.length; j++)
        {
          if (pCoworkers[j].get('id') == personId)
          {
            pCollab.push(projects[i]);
            j = pCoworkers.length;
          }
        }
      }

      return pCollab;
    }.property('App.Project.coworkers', 'App.Person.projects')
  }
);
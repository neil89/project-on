App.Router.map
(
  function()
  {
    this.route('login');
    this.resource('app', { path: '/' }, function ()
      {
        // Additional child routes
        this.route('board');
        this.route('friends');
        this.route('colleagues');
        this.route('profile');

        this.resource('projects', { path: '/projects' }, function()
          {
            this.route('index', { path: '/' });                       // projects
            this.route('project', { path: '/:project_id' });          // projects.project
            this.route('new');                                        // projects.new
          }
        );

        this.resource('people', { path: '/people' }, function()
          {                                                           // people
            this.resource('person', { path: '/:person_id' }, function()
              {                                                       // person
                this.resource('personProjects', { path: '/projects' }, function()
                  {                                                   // personProjects
                    this.route('project', { path: '/:project_id' });  // personProjects.project
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);

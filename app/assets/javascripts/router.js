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
            this.route('index', { path: '/' });
            this.route('project', { path: '/:project_id' });
            this.route('new');
          }
        );
        this.route('person', { path: '/person/:person_id' });
        /*
        this.resource('people', { path: '/people' }, function()
          {
            this.resource('person', { path: '/:person_id' }, function()
              {
                this.resource('projects', { path: '/projects' }, function()
                  {
                    this.route('project', { path: '/:project_id' });
                  }
                )
              }
            );
          }
        );
         */
      }
    );
  }
);

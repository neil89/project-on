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
      }
    );
  }
);

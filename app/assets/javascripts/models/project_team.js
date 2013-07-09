App.Adapter.map
(
  'App.ProjectTeam',
  {
    coworker: {embedded: 'load'},
    project:  {embedded: 'load'}
  }
);


App.ProjectTeam = DS.Model.extend
(
  {
    coworker: DS.belongsTo('App.Person',
              //{ inverse: 'projects' },
              { embedded: 'load' }),
    project:  DS.belongsTo('App.Project',
              //{ inverse: 'coworkers' },
              { embedded: 'load' })
  }
);

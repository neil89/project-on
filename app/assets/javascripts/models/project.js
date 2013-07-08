App.Adapter.map
(
  'App.Project',
  {
    creator: {embedded: 'load'},
    coworkers: {embedded: 'load'}/*,
    profiles: {embedded: 'load'}*/
  }
);


App.Project = DS.Model.extend
(
   {
      title:        DS.attr('string'),
      creator:      DS.belongsTo('App.Person'),
      coworkers:    DS.hasMany('App.ProjectTeam',
                    { embedded: 'load' }),
      startingDate: DS.attr('string'),
      endingDate:   DS.attr('string'),
      description:  DS.attr('string')/*,
      profiles:     DS.hasMany('App.Profile', {embedded: 'load'})*/
   }
);
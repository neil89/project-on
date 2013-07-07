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
      title: DS.attr('string'),
      creator: DS.belongsTo('App.Person', { inverse: 'projectsCreated' }, {embedded: 'load'}),
      coworkers: DS.hasMany('App.Person', { inverse: 'coworkers' }, {embedded: 'load'}),
      startingDate: DS.attr('string'),
      endingDate: DS.attr('string'),
      description: DS.attr('string')/*,
      profiles: DS.hasMany('App.Profile', {embedded: 'load'})*/
   }
);
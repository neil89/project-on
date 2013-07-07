App.Adapter.map
(
  'App.Person',
  {
    profiles: {embedded: 'load'},
    projectsCreated: {embedded: 'load'},
    projects: {embedded: 'load'},
    friends: {embedded: 'load'}
  }
);

App.Person = DS.Model.extend
(
   {
      name: DS.attr('string'),
      place: DS.attr('string'),
      email: DS.attr('string'),
      password: DS.attr('string'),
      academic: DS.attr('string'),
      professional: DS.attr('string'),
      profiles: DS.hasMany('App.Profile', {embedded: 'load'}),
      knowledge: DS.attr('string'),
      projectsCreated: DS.hasMany('App.Project', { inverse: 'creator' }, {embedded: 'load'}),
      projects: DS.hasMany('App.Project', { inverse: 'coworkers' }, {embedded: 'load'}),
      friends: DS.hasMany('App.Person', {embedded: 'load'}),
      iconUrl: DS.attr('string')
   }
);
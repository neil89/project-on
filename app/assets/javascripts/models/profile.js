App.Adapter.map
(
  'App.Profile',
  {
    projects: {embedded: 'load'},
    people: {embedded: 'load'}
  }
);

App.Profile = DS.Model.extend
(
   {
      name: DS.attr('string'),
      tools: DS.attr('string'),
      number: DS.attr('number'),
      projects: DS.hasMany('App.Project', {embedded: 'load'}),
      people: DS.hasMany('App.Person', {embedded: 'load'})
   }
);
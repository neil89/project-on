App.Adapter = DS.RESTAdapter.extend
(
  {
    bulkCommit: false
  }
);

App.Adapter.configure
(
  "plurals",
  {
    person: "people"
  }
);

App.Store = DS.Store.extend
(
  {
    revision: 12,
    adapter:  App.Adapter.create()
  }
);
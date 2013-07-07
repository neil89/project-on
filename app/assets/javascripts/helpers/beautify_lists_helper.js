function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function beautifyList (list, type)
{
  var auxStr = trimStr(list);
  var tag;
  var idx = 0;
  var listTag = "<ul>";
  var classAttr;
  var listBullets;

  if (type == 'kn')
  {
    classAttr = "knowledge-list";
    listBullets = "icon-ok";
  }
  if (type == 'pf')
  {
    classAttr = "profiles-list";
    listBullets = "icon-screenshot";
  }

  while (idx >= 0)
  {
    idx = auxStr.indexOf(",");
    if (idx == -1)
      tag = "<li class='" + classAttr + "'>" +
      "<i class='" + listBullets + " list-bullets'></i>" +
      capitaliseFirstLetter(auxStr) + "</li>";
    else
      tag = "<li class='" + classAttr + "'>" +
      "<i class='" + listBullets + " list-bullets'></i>" +
      capitaliseFirstLetter(auxStr.substring(0, idx)) + "</li>";
    auxStr = auxStr.substring(idx+1);
    listTag += tag;
  }

  listTag += "</ul>";

  return listTag;
}


Ember.Handlebars.helper
(
  'beautifyKnowledge', function(knowledge)
  {
    var list = beautifyList(knowledge, 'kn');

    return new Handlebars.SafeString(list);
  }
);

Ember.Handlebars.helper
(
  'beautifyProfiles', function(profiles)
  {
    var list = beautifyList(collectionToArray(profiles).toString(), 'pf');

    return new Handlebars.SafeString(list);
  }
);

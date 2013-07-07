function collectionToArray(list)
{
  var array = list;

  if (!$.isArray(array))
    array = list.toArray();

  return array;
}

function trimStr(str)
{
  return str.replace(/,\s/g,",");
}

function arrayLength(list)
{
  return collectionToArray(list).length;
}

Ember.Handlebars.helper
(
  'pluralizeFriends', function(list)
  {
    var arrayL = arrayLength(list);

    var str = arrayL + " amigo";

    if (arrayL != 1)
      str += "s";

    return str;
  }
);

Ember.Handlebars.helper
(
  'pluralizeProjects', function(list)
  {
    var arrayL = arrayLength(list);

    var str = arrayL + " proyecto";

    if (arrayL != 1)
      str += "s";

    return str;
  }
);
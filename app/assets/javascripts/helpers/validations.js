function validateEmail()
{
  var flag = false;
  var emailStr = $("#email-input").val();
  var pattern = /^[\w+\-\_.]+@[a-z\d\-.]+\.[a-z]+$/i;

  if (!pattern.test(emailStr))
    flag = true;

  return flag;
}

function validatePass()
{
  var flag = false;
  var passStr = $("#pass-input").val();

  if (passStr.length < 4)
    flag = true;

  return flag;
}
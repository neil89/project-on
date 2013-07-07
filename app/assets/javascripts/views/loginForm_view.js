App.LoginFormView = Ember.View.extend
(
  {
    tagName: "form",
    username: null,
    password: null,

    submit: function(ev)
    {
      ev.preventDefault();

      var user = this.get('username');
      var pass = this.get('password');
      console.log('User: ' + user + ' Password: ' + pass);

      this.get('controller').loginAction(user, pass);
    },

    didInsertElement: function()
    {
      if ($("#loginHeader") !== undefined)
      {
        var circle = $("#circle");
        setTimeout(function()
          {
            circle.css
            (
              {
                width: "72px",
                height: "72px",
                borderRadius: "72px"
              }
            );
          }, 2400);

        var encloserCircle = $("#encloser-circle");
        setTimeout(function()
          {
            encloserCircle.css
            (
              {
                paddingTop: "7px",
                marginBottom: "-6px",
                height: "78px"
              }
            );
          }, 2400);

        var circleHole = $("#circle-hole");
        setTimeout(function()
          {
            circleHole.css
            (
              {
                width: "42px",
                height: "42px",
                borderRadius: "42px"
              }
            );
          }, 2400);

        var encloserCircleHole = $("#encloser-circle-hole");
        setTimeout(function()
          {
            encloserCircleHole.css
            (
              {
                marginLeft: "62px",
                marginTop: "-56.5px"
              }
            );
          }, 2400);

        var dash = $("#dash");
        setTimeout(function()
          {
            dash.css
            (
              {
                width: "38px"
              }
            );
          }, 2900);

        var encloserDash = $("#encloser-dash");
        setTimeout(function()
          {
            encloserDash.css
            (
              {
                marginTop: "40.5px",
                marginLeft: "36px"
              }
            );
          }, 2900);

        setTimeout(function()
          {
            var buttonOn = $("#encloser");
            buttonOn.addClass("rotated");
          }, 5900);
      }
    }
  }
);
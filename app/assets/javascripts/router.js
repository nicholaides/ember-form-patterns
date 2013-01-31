App.Router.map(function() {
  this.resource("app", { path: "/" }, function(){
    this.route("gifts", { path: "/" });
  });
  this.route("thank_you");
});

App.Router.reopen({
  location: 'history'
});


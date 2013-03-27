App.Router.map(function() {
  this.route("letter", { path: "/" });
  this.route("thank_you");
});

App.Router.reopen({
  location: 'history'
});


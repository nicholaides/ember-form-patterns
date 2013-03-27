App.Router.map(function() {
  this.route("new_gift", { path: "/" });
  this.route("thank_you");
});

App.Router.reopen({
  location: 'history'
});


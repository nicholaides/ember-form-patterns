App.LetterRoute = Em.Route.extend({
  setupController: function(){
    this.controller.set('gifts', App.Gift.find({}))
    this.controller.reset();
  }
});

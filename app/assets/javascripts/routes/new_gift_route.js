App.NewGiftRoute = Em.Route.extend({
  setupController: function(){
    this.controller.set('collection', App.Gift.find({}))
    this.controller.reset();
  }
});

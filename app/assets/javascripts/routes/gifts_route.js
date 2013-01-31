App.GiftsRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('content', [
      { name: "Transformers" },
      { name: "Barbie"       },
    ]);
  },
  renderTemplate: function(){
    var newGiftController = this.controllerFor('newGift'),
        giftsController   = this.controllerFor('gifts');

    newGiftController.set('collection', giftsController);

    this.render('new-gift', {
      outlet: 'form',
      controller: newGiftController
    });
    this.render('gifts', {
      outlet: 'list',
      controller: giftsController
    });
  }
});

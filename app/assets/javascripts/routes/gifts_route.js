App.GiftsRoute = Ember.Route.extend({
  renderTemplate: function(){
    var newGiftController = this.controllerFor('newGift'),
        giftsController   = this.controllerFor('gifts');

    App.Gift.find().then(function(gifts){
      Em.run.next(function(){
        giftsController.set('content', gifts.filterProperty('isLoaded'))
      });
    });
    newGiftController.set('collection', giftsController);
    newGiftController.reset()

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

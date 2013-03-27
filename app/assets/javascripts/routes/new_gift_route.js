App.NewGiftRoute = Em.Route.extend({
  setupController: function(controller){
    App.Gift.find().then(function(gifts){
      Em.run.next(function(){
        controller.set('collection',  gifts.filterProperty('isLoaded'))
      });
    });
    controller.reset();
  }
});

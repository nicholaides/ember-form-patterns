App = Em.Application.create();

App.Router.map(function() {
  this.route("gifts", { path: "/" });
});

App.GiftsRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('content', [
      { name: "Transformers", price: 30.00 },
      { name: "Barbie",       price: 49.99 },
    ]);
  },
  renderTemplate: function(){
    var newGiftController = this.controllerFor('newGift'),
        giftsController = this.controllerFor('gifts');

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

App.Gift = Em.Object;

App.GiftsController = Em.ArrayController.extend({
  sortProperties: ['price'],
  sortAscending: false
});

App.NewGiftController = Em.ObjectController.extend({
  collection: null,

  init: function() {
    this._super();
    this.reset();
  },

  add: function () {
    this.get('collection').addObject(this.get('content'));
    this.reset();
  },

  reset: function () {
    this.set('content', App.Gift.create())
  },

  price: function (key, priceStr) {
    if (arguments.length > 1) {
      // setter
      var parsedPrice = parseFloat(priceStr),
          price       = isNaN(parsedPrice) ? null : parsedPrice;

      this.set('content.price', price);
    }

    return this.get('content.price');
  }.property('content.price')
});

App.NewGiftView = Em.View.extend({
  templateName: 'new-gift'
});

Em.TextField.reopen({
  attributeBindings: ["required"]
});

App.NewGiftController = Em.ObjectController.extend({
  collection: null,

  add: function () {
    var gift = this.get('content');
    gift.store.commit()
    this.get('collection').addObject(gift);
    this.reset();
  },

  reset: function () {
    this.set('content', App.Gift.createRecord())
  }
});

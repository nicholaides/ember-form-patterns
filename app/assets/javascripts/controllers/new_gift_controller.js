App.NewGiftController = Em.ObjectController.extend({
  collection: null,

  reset: function () {
    this.transaction = this.get('store').transaction();
    var gift         = this.transaction.createRecord(App.Gift);
    this.set('content', gift);
  },

  add: function () {
    var gift = this.get('content');
    this.transaction.commit();
    this.get('collection').addObject(gift);
    this.reset();
  },

  deleteRecords: function () {
    this.get('collection').forEach(function (gift) {
      gift.deleteRecord();
      gift.store.commit();
    });
  },

  sendToSanta: function () {
    this.deleteRecords();
    this.transitionToRoute('thank_you');
  }
});

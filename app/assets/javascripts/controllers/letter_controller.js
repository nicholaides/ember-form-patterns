App.LetterController = Em.ObjectController.extend({
  collection: null,
  yourName:   'Timmy',
  pitch:      'I have really tried to be good this year.',
  ask:        'Please bring me',

  reset: function () {
    var gift = App.Gift.createRecord();
    this.set('content', gift);
  },

  add: function () {
    var gift = this.get('content');
    this.get('collection').addObject(gift);
    gift.get('transaction').commit();
    this.reset();
  },

  deleteGift: function (gift) {
    transaction = this.get('store').transaction();
    transaction.add(gift);
    gift.deleteRecord();
    transaction.commit();
    this.get('collection').removeObject(gift);
  },

  deleteRecords: function () {
    transaction = this.get('store').transaction();
    this.get('collection').forEach(function (gift) {
      transaction.add(gift);
      gift.deleteRecord();
    });
    transaction.commit();
  },

  sendToSanta: function () {
    this.deleteRecords();
    this.transitionToRoute('thank_you');
  }
});

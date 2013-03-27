App.LetterController = Em.ObjectController.extend({
  newGift:    null,
  collection: null,

  yourName:   'Timmy',
  pitch:      'I have really tried to be good this year.',
  ask:        'Please bring me',

  reset: function () {
    var gift = App.Gift.createRecord();
    this.set('newGift', gift);
  },

  add: function () {
    var gift = this.get('newGift');
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

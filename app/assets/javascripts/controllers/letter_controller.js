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

  deleteMe: function (deletable) {
    transaction = this.get('store').transaction();
    transaction.add(deletable);
    deletable.deleteRecord();
    this.get('collection').removeObject(deletable);
    transaction.commit();
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

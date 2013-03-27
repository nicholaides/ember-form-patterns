App.NewGiftController = Em.ObjectController.extend({
  collection: null,
  yourName: 'Timmy',
  pitch: 'I have really tried to be good this year.',
  ask: 'Please bring me',

  reset: function () {
    var gift = App.Gift.createRecord();
    this.set('content', gift);
  },

  add: function () {
    var gift = this.get('content');
    gift.get('transaction').commit();
    this.get('collection').addObject(gift);
    this.reset();
  },

  deleteMe: function (deletable) {
    console.log(deletable);
    deletable.deleteRecord();
    deletable.get('transaction').commit();
  }
});

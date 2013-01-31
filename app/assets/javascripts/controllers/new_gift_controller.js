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
  }
});

App.GiftsController = Em.ArrayController.extend({

  deleteRecords: function () {
    this.forEach(function (gift) {
      gift.deleteRecord();
      gift.store.commit();
    });
  },

  sendToSanta: function () {
    this.deleteRecords();
    this.transitionTo('thank_you');
  }
});

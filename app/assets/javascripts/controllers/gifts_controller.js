App.GiftsController = Em.ArrayController.extend({

  deleteRecords: function () {
    this.forEach(function (gift) {
      gift.deleteRecord();
      gift.store.commit();
    });
  },

  sendToSanta: function () {
    this.deleteRecords();
    this.transitionToRoute('thank_you');
  },
});

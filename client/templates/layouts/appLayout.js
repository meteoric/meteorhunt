Template.appLayout.events({
  'click [data-ion-modal]': function (event) {
    var templateName = $(event.currentTarget).data('ion-modal');
    IonModal.open(templateName, $(event.currentTarget).data());
  },

  'click [data-ion-animate]': function (event, template) {
    IonNavigationController.currentAnimation = $(event.currentTarget).data('ion-animate');
  },
});

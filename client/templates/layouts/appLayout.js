Template.appLayout.events({
  'click [data-ion-modal]': function (event) {
    var templateName = $(event.currentTarget).data('ion-modal');
    IonModal.open(templateName, $(event.currentTarget).data());
  },

  'click [data-ion-animate]': function (event, template) {
    IonNavView.currentAnimation = $(event.currentTarget).data('ion-animate');
  },

  'click [data-nav-direction]': function () {
    IonNavView.navDirection = $(event.target).data('nav-direction');
  }
});

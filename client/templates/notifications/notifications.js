Template.notifications.rendered = function () {
  if (!Meteor.user()) {
    IonModal.open('signIn');
  }
};

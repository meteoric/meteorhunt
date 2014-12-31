Template.profile.rendered = function () {
  if (!Meteor.user()) {
    IonModal.open('signIn');
  }
};

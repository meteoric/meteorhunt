Template.settings.events({
  'click [data-action=sign-out]': function (event, template) {
    Meteor.logout(function () {
      IonModal.close();
      Router.go('/');
    });
  }
});

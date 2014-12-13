Template.signIn.events({
  'click [data-action=sign-in]': function (event, template) {
    Meteor.loginWithMeteorDeveloperAccount({}, function (error) {
      if (error) {
        alert(error);
      } else {
        IonModal.close();
      }
    });
  }
});

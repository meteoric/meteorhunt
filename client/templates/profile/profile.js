Template.profile.rendered = function () {
  if (!Meteor.loggingIn() && !Meteor.user()) {
    IonModal.open('signIn');
  }
};

Template.profile.helpers({
  thereAreVotedProducts: function(){
    return Products.find().fetch().length!==0;
  }
});

Template.productsShow.events({
  'click [data-action=new-comment]': function (event, template) {
    if (Meteor.user()) {
      IonModal.open('newComment');
    } else {
      IonModal.open('signIn');
    }
  }
});

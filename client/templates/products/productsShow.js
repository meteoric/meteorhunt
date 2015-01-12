Template.productsShow.events({
  'click [data-action=new-comment]': function (event, template) {
    if (Meteor.user()) {
      IonModal.open('newComment', {productId: template.data.product._id});
    } else {
      IonModal.open('signIn');
    }
  }
});

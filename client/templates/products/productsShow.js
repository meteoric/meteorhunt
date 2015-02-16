Template.productsShow.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('product', Router.current().params._id);
  }.bind(this));
};

Template.productsShow.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.productsShow.helpers({
  product: function () {
    return Products.findOne({_id: Router.current().params._id});
  },

  comments: function () {
    return Comments.find({productId: Router.current().params._id}, {sort: {createdAt: -1}});
  }
});

Template.productsShow.events({
  'click [data-action=new-comment]': function (event, template) {
    if (Meteor.user()) {
      IonModal.open('newComment', {productId: this._id});
    } else {
      IonModal.open('signIn');
    }
  }
});

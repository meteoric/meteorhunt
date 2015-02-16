Template.usersShow.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('user', Router.current().params._id);
  }.bind(this));
};

Template.usersShow.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.usersShow.helpers({
  user: function () {
    return Meteor.users.findOne({_id: Router.current().params._id});
  }
});

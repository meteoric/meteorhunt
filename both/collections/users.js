Meteor.users.before.insert(function (userId, doc) {
  doc.profile.votedProductIds = [];
});

Meteor.users.helpers({
  votedProducts: function () {
    return Products.find({_id: {$in: this.profile.votedProductIds}});
  }
});

Meteor.publish('products', function() {
  return Products.find();
});

Meteor.publish('product', function(_id) {
  return Products.find({_id: _id});
});

Meteor.publish('votedProducts', function(user) {
  if (!user) {
    return;
  }
  return Products.find({_id: {$in: user.profile.votedProductIds}});
});

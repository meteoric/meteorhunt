Meteor.publish('products', function() {
  return Products.find();
});

Meteor.publish('product', function(_id) {
  return Products.find({_id: _id});
});

Meteor.startup(function() {
  if (Products.find({}).count() === 0) {
    _(20).times(function(n) {
      Products.insert({
        title: Fake.sentence(),
        description: Fake.paragraph(),
        numberOfVotes: _.random(0, 100),
        numberOfComments: _.random(0, 20)
      });
    });
  }
});

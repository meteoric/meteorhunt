Meteor.startup(function() {
  if (Products.find({}).count() === 0) {
    _(20).times(function(n) {
      Products.insert({
        url: 'http://www.' + Fake.word() + '.com',
        name: Fake.sentence(),
        tagline: Fake.sentence(),
        numberOfVotes: _.random(0, 20),
        numberOfComments: _.random(0, 12)
      });
    });
  }
});

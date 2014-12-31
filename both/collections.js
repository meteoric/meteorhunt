Products = new Mongo.Collection('products');

Products.before.insert(function (userId, doc) {
  doc.createdAt = new Date();
});

Products.attachSchema(new SimpleSchema({
  url: {
    type: String,
    autoform: {
      'label-type': 'placeholder',
      placeholder: 'Product URL'
    },
    max: 200
  },
  name: {
    type: String,
    autoform: {
      'label-type': 'placeholder',
      placeholder: 'Product Name'
    },
    max: 200
  },
  tagline: {
    type: String,
    autoform: {
      'label-type': 'placeholder',
      placeholder: 'Tagline'
    },
    max: 200
  },
  numberOfVotes: {
    type: Number,
    optional: true,
    defaultValue: 0
  },
  numberOfComments: {
    type: Number,
    optional: true,
    defaultValue: 0
  },
  createdAt: {
    type: Date
  }
}));

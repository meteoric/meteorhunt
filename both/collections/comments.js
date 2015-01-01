Comments = new Mongo.Collection('comments');

Comments.before.insert(function (userId, doc) {
  doc.createdAt = new Date();
});

Comments.attachSchema(new SimpleSchema({
  body: {
    type: String,
    autoform: {
      rows: 6,
      'label-type': 'placeholder',
      placeholder: 'Add your comment…'
    }
  },
  createdAt: {
    type: Date
  }
}));

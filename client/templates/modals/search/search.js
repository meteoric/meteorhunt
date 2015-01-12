Tracker.autorun(function() {
  if (Session.get('searchQuery')) {
    Meteor.subscribe('productsSearch', Session.get('searchQuery'));
  }
});

Template.search.events({
  'keyup input': function (event, template) {
    Session.set('searchQuery', event.target.value);
  },

  'click a': function (event, template) {
    IonModal.close();
  }
});

Template.search.helpers({
  products: function() {
    return Products.search(Session.get('searchQuery'));
  },
  searchQuery: function() {
    return Session.get('searchQuery');
  }
});

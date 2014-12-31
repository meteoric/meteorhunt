AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

TrendingController = AppController.extend({
  layoutTemplate: 'trendingLayout',
  waitOn: function () {
    return Meteor.subscribe('products');
  },
  data: function() {
    return {
      products: Products.find({}, {sort: {numberOfVotes: -1}})
    };
  }
});

TrendingShowController = AppController.extend({
  layoutTemplate: 'trendingLayout',
  waitOn: function () {
    return Meteor.subscribe('product', this.params._id);
  },
  data: function() {
    return {
      product: Products.findOne({_id: this.params._id})
    };
  }
});

RecentController = AppController.extend({
  layoutTemplate: 'recentLayout',
  waitOn: function () {
    return Meteor.subscribe('products');
  },
  data: function() {
    return {
      products: Products.find({}, {sort: {createdAt: -1}})
    };
  }
});

RecentShowController = AppController.extend({
  layoutTemplate: 'recentLayout',
  waitOn: function () {
    return Meteor.subscribe('product', this.params._id);
  },
  data: function() {
    return {
      product: Products.findOne({_id: this.params._id})
    };
  }
});

NotificationsController = AppController.extend({
  layoutTemplate: 'notificationsLayout'
});

ProfileController = AppController.extend({
  layoutTemplate: 'profileLayout'
});

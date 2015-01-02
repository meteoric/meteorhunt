AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

TrendingController = AppController.extend({
  waitOn: function () {
    return Meteor.subscribe('products');
  },
  data: function () {
    return {
      products: Products.find({}, {sort: {numberOfVotes: -1}})
    };
  }
});

TrendingShowController = AppController.extend({
  waitOn: function () {
    return Meteor.subscribe('product', this.params._id);
  },
  data: function () {
    return {
      product: Products.findOne({_id: this.params._id})
    };
  }
});

RecentController = AppController.extend({
  waitOn: function () {
    return Meteor.subscribe('products');
  },
  data: function () {
    return {
      products: Products.find({}, {sort: {createdAt: -1}})
    };
  }
});

RecentShowController = AppController.extend({
  waitOn: function () {
    return Meteor.subscribe('product', this.params._id);
  },
  data: function () {
    return {
      product: Products.findOne({_id: this.params._id})
    };
  }
});

NotificationsController = AppController.extend({
});

ProfileController = AppController.extend({
  waitOn: function () {
    if (Meteor.user()) {
      return Meteor.subscribe('votedProducts', Meteor.user());
    }
  },
  data: function () {
    if (Meteor.user()) {
      return {
        user: Meteor.user(),
        votedProducts: Products.find({_id: {$in: Meteor.user().profile.votedProductIds}})
      }
    }
  }
});

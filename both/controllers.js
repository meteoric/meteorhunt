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

ProductsShowController = AppController.extend({
  waitOn: function () {
    return Meteor.subscribe('product', this.params._id);
  },
  data: function () {
    return {
      product: Products.findOne({_id: this.params._id}),
      comments: Comments.find({productId: this.params._id}, {sort: {createdAt: -1}})
    };
  }
});

UsersShowController = AppController.extend({
  waitOn: function () {
    return Meteor.subscribe('user', this.params._id);
  },
  data: function () {
    return {
      user: Meteor.users.findOne({_id: this.params._id})
    }
  }
});


NotificationsController = AppController.extend({
});

ProfileController = AppController.extend({
  waitOn: function () {
    if (Meteor.userId()) {
      return Meteor.subscribe('user', Meteor.userId());
    }
  },
  data: function () {
    if (Meteor.userId()) {
      return {
        user: Meteor.user()
      }
    }
  }
});

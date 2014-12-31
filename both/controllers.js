AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

TrendingController = AppController.extend({
  layoutTemplate: 'trendingLayout',
  data: function() {
    return {
      products: Products.find({})
    };
  }
});

TrendingShowController = AppController.extend({
  layoutTemplate: 'trendingLayout',
  data: function() {
    return {
      product: Products.findOne({_id: this.params._id})
    };
  }
});

RecentController = AppController.extend({
  layoutTemplate: 'recentLayout',
  data: function() {
    return {
      products: Products.find({})
    };
  }
});

RecentShowController = AppController.extend({
  layoutTemplate: 'recentLayout',
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

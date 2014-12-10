AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

ProductsIndexController = AppController.extend({
  layoutTemplate: 'productsLayout',
  data: function() {
    return {
      products: Products.find({})
    };
  }
});

ProductsShowController = AppController.extend({
  layoutTemplate: 'productsLayout',
  data: function() {
    return {
      product: Products.findOne({_id: this.params._id})
    };
  }
});

ProductsRecentController = AppController.extend({
  data: function() {
    return {
      products: Products.find({})
    };
  }
});

NotificationsController = AppController.extend({
});

ProfileController = AppController.extend({
});

AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

PageController = AppController.extend({

});

ListController = AppController.extend({
  layoutTemplate: 'listLayout'
});

ProductsIndexController = ListController.extend({
  data: function() {
    return {
      products: Products.find({})
    };
  }
});

ProductsShowController = ListController.extend({
  data: function() {
    return {
      product: Products.findOne({_id: this.params._id})
    };
  }
});

ProductsRecentController = ListController.extend({
  data: function() {
    return {
      products: Products.find({})
    };
  }
});

NotificationsController = PageController.extend({
});

ProfileController = PageController.extend({
});

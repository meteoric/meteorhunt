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
  layoutTemplate: 'productsLayout',
  data: function() {
    return {
      products: Products.find({})
    };
  }
});

NotificationsController = AppController.extend({
  onAfterAction: function () {
    if (!Meteor.user()) {
      IonModal.open('signIn');
    }
  }
});

ProfileController = AppController.extend({
});

AutoForm.hooks({
  'products-new-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
      Router.go('products.show', {_id: result});
    },

    onError: function(operation, error, template) {
      alert(error);
    }
  }
});

AutoForm.hooks({
  'comments-new-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
    }
  }
});

Template.ionContent.helpers({
  classes: function () {
    var classes = ['content'];

    if (this.scroll !== false) {
      classes.push('overflow-scroll');
    }

    if (Session.get('hasHeader')) {
      classes.push('has-header');
    }

    if (Session.get('hasTabs')) {
      classes.push('has-tabs');
    }

    return classes.join(' ');
  }
});

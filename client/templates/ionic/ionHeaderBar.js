Template.ionHeaderBar.rendered = function () {
  Session.set('hasHeader', true);
};

Template.ionHeaderBar.destroyed = function () {
  Session.set('hasHeader', false);
};

Template.ionHeaderBar.helpers({
  classes: function () {
    var classes = ['bar', 'bar-header'];

    if (this.class) {
      classes.push(this.class);
    } else {
      classes.push('bar-stable');
    }

    return classes.join(' ');
  }
});

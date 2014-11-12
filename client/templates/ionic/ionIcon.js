Template.ionIcon.helpers({
  classes: function () {
    var classes = ['icon'];
    classes.push('ion-' + this.icon);
    return classes.join(' ');
  }
});

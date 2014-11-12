IonModalView = {
  ANIMATION_DURATION: 400,

  open: function (templateName) {
    this.template = Template[templateName];
    this.view = Blaze.render(this.template, $('body').get(0));

    var self = this;
    Meteor.setTimeout(function () {
      $(self.view.firstNode()).addClass('ng-enter ng-enter-active');
    }, 10);

    Meteor.setTimeout(function () {
      $('body').addClass('modal-open');
    }, this.ANIMATION_DURATION);
  },

  close: function () {
    $(this.view.firstNode()).removeClass('ng-enter-active')

    var self = this;
    Meteor.setTimeout(function () {
      $('body').removeClass('modal-open');
      Blaze.remove(self.view);
    }, this.ANIMATION_DURATION);
  }
};

Template.ionModalView.rendered = function () {
  if (this.data.focusFirstInput) {
    Meteor.setTimeout(function () {
      this.$('input:first').focus();
    }, IonModalView.ANIMATION_DURATION);
  }
};

Template.ionModalView.helpers({
  animation: function () {
    if (this.animation) {
      return this.animation;
    } else {
      return 'slide-in-up';
    }
  }
});

Template.ionModalView.events({
  'click [data-modal-close]': function (event, template) {
    IonModalView.close();
  }
});

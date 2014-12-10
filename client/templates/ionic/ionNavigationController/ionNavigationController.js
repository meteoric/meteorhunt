IonNavigationController = {
  currentAnimation: 'slide-in-right',
  animationDuration: 250,
  animationEndEvent: 'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd'
};

Template.ionNavigationController.rendered = function () {
  this.find('[data-navigation-container]')._uihooks = {
    insertElement: function(node, next) {
      if (!IonNavigationController.currentAnimation) {
        $(node).insertBefore(next);
        return;
      }

      var classes = ['ng-enter', IonNavigationController.currentAnimation];
      $(node).insertBefore(next).addClass(classes.join(' '));

      Meteor.setTimeout(function() {
        $(node).addClass('ng-enter-active');
      }, 10);

      $(node).on(IonNavigationController.animationEndEvent, function () {
        $(this).removeClass(classes).removeClass('ng-enter-active').off('webkitAnimationEnd');
        // IonNavigationController.currentAnimation = null;
      });
    },

    removeElement: function(node) {
      if (!IonNavigationController.currentAnimation) {
        $(node).remove();
        return;
      }

      Meteor.setTimeout(function () {
        $(node).remove();
      }, IonNavigationController.animationDuration);
    }
  };
};

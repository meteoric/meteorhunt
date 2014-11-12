Template.listLayout.rendered = function() {
  this.find('.nav-container')._uihooks = {
    insertElement: function(node, next) {
      var direction = navDirection === 'left' ? 'reverse' : 'forward';
      $('.nav-container').addClass(direction);

      $(node).addClass('ng-animate ng-enter');
      $(node).insertBefore(next);

      // start the animation:
      Meteor.setTimeout(function() {
        $(node).addClass('ng-enter-active');
      }, 10);

      Meteor.setTimeout(function() {
        $(node).removeClass('ng-animate ng-enter ng-enter-active');
        $('.nav-container').removeClass(direction);
      }, 400);
    },

    removeElement: function(node) {
      $(node).addClass('ng-animate ng-leave ng-leave-active');

      Meteor.setTimeout(function() {
        $(node).remove();
      }, 400);
    }
  };

};

Template.listLayout.events({
  'click [data-nav-direction]': function(event) {
    navDirection = $(event.currentTarget).data('nav-direction');
  },

  'click [data-ion-modal]': function (event) {
    var templateName = $(event.target).data('ion-modal');
    IonModalView.open(templateName);
  }
});
